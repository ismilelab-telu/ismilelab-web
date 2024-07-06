// ** React Imports
import { Link, useNavigate } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Icons Imports
import { ChevronLeft, X } from "react-feather";

// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
  FormFeedback,
  Spinner,
} from "reactstrap";

// ** Illustrations Imports
import illustrationsLight from "@src/assets/images/pages/forgot-password-v2.svg";
import illustrationsDark from "@src/assets/images/pages/forgot-password-v2-dark.svg";
import ismileCard from "@src/assets/images/landing/ismile-card-landingpage.png";

// ** Styles
import "@styles/react/pages/page-authentication.scss";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

// ** Cuustom Component
import InputPasswordToggle from "@components/input-password-toggle";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit({ email }) {
    try {
      toast((t) => <ToastContent t={t} email={email} />);
      navigate("/");
    } catch (error) {
      toast((t) => <ToastContent t={t} email={email} />);
    }
  }

  const ToastContent = ({ t, email }) => {
    return (
      <div className="d-flex">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between">
            <h6>{email}</h6>
            <X
              size={12}
              className="cursor-pointer"
              onClick={() => toast.dismiss(t.id)}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center">
            <img
              className="ismile-cardx"
              src={ismileCard}
              height={"auto"}
              width={"auto"}
              alt="iSmile Card"
            ></img>
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Forgot Password? 🔒
            </CardTitle>
            <CardText className="mb-2">
              Enter your email and we'll send you instructions to reset your
              password
            </CardText>
            <Form
              className="auth-forgot-password-form mt-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <Label className="from-label">Email</Label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue={""}
                  rules={{ required: "Email cannot be null" }}
                  render={({ field }) => (
                    <Input
                      autoFocus
                      type="text"
                      placeholder="john@example.com"
                      invalid={errors.email && true}
                      {...field}
                    />
                  )}
                />
                {errors.email && (
                  <FormFeedback>{errors.email.message}</FormFeedback>
                )}
              </div>
              <div>
                <Button className="mt-2" block type="submit" color="primary">
                  {isLoading && <Spinner color="light" size={"sm"} />}
                  <span>Send reset link</span>
                </Button>
              </div>
            </Form>
            <p className="mt-2 text-center">
              <Link to={"/"}>
                <ChevronLeft className="me-25 rotate-rtl" size={14} />
                <span className="align-middle">Back to login</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPassword;
