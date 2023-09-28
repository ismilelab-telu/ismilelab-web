import { NavLink } from 'react-router-dom'

export default function LandingPage() {
    return (
        <>
            {/* BACKGROUND-IMAGE */}
            <div className="w-full h-screen overflow-hidden absolute -z-10">
                <img src="src/assets/gradient-landingpage.png" alt="" className="h-90 absolute -top-[200px] -right-[500px]"/>
            </div>
            
            {/* HEADER */}
            <div className="flex justify-between px-4 sm:px-16 pt-6 pb-4 sticky top-0">
                {/* iSmile Logo */}
                <a href="#" ><img src="src\assets\logo\Vertical.jpg"
                    className="h-12 sm:h-16"
                    alt="iSmile Logo"
                    />
                </a>

                {/* RIGHT ITEM */}
                <div className="flex items-center gap-16">
                    <div className="hidden sm:flex gap-10 text-lg font-bold text-[#515151]">
                        <NavLink to="/app" className="font-mono">About Lab</NavLink>
                        {/* <a href="#" className="font-mono">Assistant</a> */}
                    </div>
                        <button className="bg-[#1CAB43] rounded-lg text-white px-4 py-3 font-bold text-sm sm:text-base">
                            LOGIN
                        </button>
                </div>
            </div>
            
            {/* MAIN */}
            <div className="flex">
                {/* INFO */}
                <div className="flex sm:w-3/5 h-screen items-center justify-center">
                    <div className="flex flex-col gap-16 mx-24">
                        <div className="">
                            <h1 className="font-['Jost'] text-4xl sm:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2FEAA8] to-[#028CF3]">i-Smile Laboratory</h1>
                            <p className="font-mono text-2xl text-[#515151]">Website untuk Praktikum mahasiswa Teknik Komputer Telkom University</p>
                        </div>
                        <div className="flex gap-6 self-start">
                            <button className="bg-[#2AE1AF] rounded-xl font-bold text-white py-2 px-8 text-xl">LOGIN</button>
                            <button className="border-2 border-[#2AE1AF] rounded-xl text-[#2AE1AF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M29.8 25C29.8 25.9494 29.5185 26.8774 28.9911 27.6667C28.4636 28.4561 27.714 29.0713 26.8369 29.4346C25.9598 29.7979 24.9947 29.893 24.0636 29.7078C23.1325 29.5226 22.2772 29.0654 21.6059 28.3941C20.9346 27.7228 20.4774 26.8675 20.2922 25.9364C20.107 25.0053 20.2021 24.0402 20.5654 23.1631C20.9287 22.286 21.5439 21.5364 22.3333 21.0089C23.1226 20.4815 24.0507 20.2 25 20.2C26.2726 20.2015 27.4926 20.7076 28.3925 21.6075C29.2924 22.5074 29.7985 23.7274 29.8 25ZM40 18.4V31.6C39.9975 33.827 39.1117 35.9622 37.5369 37.5369C35.9622 39.1117 33.827 39.9975 31.6 40H18.4C16.173 39.9975 14.0378 39.1117 12.4631 37.5369C10.8883 35.9622 10.0025 33.827 10 31.6V18.4C10.0025 16.173 10.8883 14.0378 12.4631 12.4631C14.0378 10.8883 16.173 10.0025 18.4 10H31.6C33.827 10.0025 35.9622 10.8883 37.5369 12.4631C39.1117 14.0378 39.9975 16.173 40 18.4ZM32.2 25C32.2 23.576 31.7777 22.1839 30.9866 20.9999C30.1954 19.8159 29.0709 18.893 27.7553 18.3481C26.4397 17.8031 24.992 17.6605 23.5954 17.9383C22.1987 18.2162 20.9158 18.9019 19.9088 19.9088C18.9019 20.9158 18.2162 22.1987 17.9383 23.5954C17.6605 24.992 17.8031 26.4397 18.3481 27.7553C18.893 29.0709 19.8159 30.1954 20.9999 30.9866C22.1839 31.7777 23.576 32.2 25 32.2C26.9089 32.1978 28.739 31.4386 30.0888 30.0888C31.4386 28.739 32.1978 26.9089 32.2 25ZM34.6 17.2C34.6 16.844 34.4944 16.496 34.2966 16.2C34.0989 15.904 33.8177 15.6733 33.4888 15.537C33.1599 15.4008 32.798 15.3651 32.4488 15.4346C32.0997 15.504 31.7789 15.6755 31.5272 15.9272C31.2755 16.1789 31.104 16.4997 31.0346 16.8488C30.9651 17.198 31.0008 17.5599 31.137 17.8888C31.2733 18.2177 31.504 18.4989 31.8 18.6966C32.096 18.8944 32.444 19 32.8 19C33.2774 19 33.7352 18.8104 34.0728 18.4728C34.4104 18.1352 34.6 17.6774 34.6 17.2Z" fill="#2AE1AF"/>
                                </svg>
                            </button>
                            <button className="border-2 border-[#2AE1AF] rounded-xl text-[#2AE1AF]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M40.4865 22.7754C40.4865 15.731 33.4244 10 24.7431 10C16.063 10 9 15.731 9 22.7754C9 29.0907 14.6008 34.3796 22.1663 35.3798C22.6791 35.4902 23.3768 35.7178 23.5534 36.156C23.7121 36.554 23.6572 37.1775 23.6041 37.5795C23.6041 37.5795 23.4194 38.6904 23.3796 38.927L23.3735 38.9621C23.2987 39.3883 23.1101 40.4639 24.7431 39.7757C26.4235 39.0677 33.8098 34.4373 37.1127 30.6356H37.1121C39.3937 28.1337 40.4865 25.5948 40.4865 22.7754ZM21.545 19.3711H20.4407C20.2714 19.3711 20.1338 19.5084 20.1338 19.6771V26.5369C20.1338 26.7059 20.2714 26.8429 20.4407 26.8429H21.545C21.7143 26.8429 21.8516 26.7059 21.8516 26.5369V19.6771C21.8516 19.5084 21.7143 19.3711 21.545 19.3711ZM28.0412 19.3711H29.1455C29.3151 19.3711 29.4521 19.5084 29.4521 19.6771V26.5369C29.4521 26.7059 29.3151 26.8429 29.1455 26.8429H28.0412C28.0141 26.8429 27.9878 26.839 27.9628 26.8323L27.9612 26.8319C27.9602 26.8317 27.9592 26.8314 27.9582 26.8314L27.9506 26.829C27.9463 26.8277 27.942 26.8262 27.9374 26.8245C27.9344 26.8236 27.9314 26.8224 27.9283 26.8212L27.9192 26.8173L27.9133 26.8148C27.9084 26.8127 27.9033 26.8103 27.8988 26.8076L27.8965 26.8065C27.8944 26.8054 27.8923 26.8044 27.89 26.803L27.8796 26.7969L27.871 26.7916C27.8701 26.7907 27.8689 26.7898 27.868 26.7892C27.8387 26.7692 27.8119 26.7442 27.7901 26.7134L24.6426 22.4627V26.5369C24.6426 26.7059 24.5053 26.8429 24.3357 26.8429H23.2317C23.0624 26.8429 22.9248 26.7059 22.9248 26.5369V19.6771C22.9248 19.5084 23.0624 19.3711 23.2317 19.3711H24.3357C24.3376 19.3711 24.3394 19.3713 24.3411 19.3714L24.3412 19.3714C24.3429 19.3716 24.3446 19.3717 24.3466 19.3717L24.3518 19.372C24.3553 19.3721 24.3588 19.3722 24.3623 19.3726L24.3664 19.3731C24.3704 19.3734 24.3745 19.3738 24.3786 19.3747C24.3828 19.375 24.3873 19.3757 24.3916 19.3763C24.3973 19.3775 24.403 19.379 24.4091 19.3802L24.4135 19.3814L24.4165 19.3822L24.4196 19.3832C24.426 19.3847 24.432 19.3868 24.438 19.3889C24.4413 19.3901 24.4444 19.3913 24.448 19.3926C24.454 19.3947 24.4598 19.3974 24.4655 19.4001L24.4655 19.4001C24.4676 19.4009 24.4695 19.4018 24.4715 19.4028L24.4752 19.4046C24.4806 19.4073 24.486 19.4107 24.4914 19.414C24.4948 19.4155 24.4978 19.4173 24.5008 19.4194C24.5041 19.4214 24.5074 19.4237 24.5106 19.426L24.5168 19.4303L24.519 19.4319C24.5201 19.4328 24.5212 19.4336 24.5223 19.4345C24.5231 19.4351 24.5239 19.4358 24.5246 19.4366C24.5304 19.4408 24.5358 19.4454 24.5409 19.4502C24.5431 19.452 24.5449 19.4535 24.5467 19.4553C24.553 19.4614 24.5591 19.4674 24.5651 19.4743L24.5672 19.4761C24.5757 19.4861 24.5838 19.4964 24.591 19.5072L27.7346 23.7525V19.6771C27.7346 19.5084 27.8719 19.3711 28.0412 19.3711ZM18.8831 25.1254H15.8826V19.6778C15.8826 19.5085 15.7453 19.3712 15.5763 19.3712H14.4717C14.3024 19.3712 14.165 19.5085 14.165 19.6778V26.5363V26.5369C14.165 26.6193 14.1979 26.6938 14.2508 26.7488C14.252 26.7503 14.2532 26.7518 14.255 26.7533L14.2595 26.7575C14.3147 26.8106 14.389 26.8432 14.4714 26.8432H14.4717H18.8831C19.0524 26.8432 19.1891 26.7056 19.1891 26.5363V25.4321C19.1891 25.2627 19.0524 25.1254 18.8831 25.1254ZM35.5495 20.7824C35.5495 20.952 35.4127 21.089 35.2434 21.089H32.2432V22.2482H35.2434C35.4127 22.2482 35.5495 22.3858 35.5495 22.5551V23.6593C35.5495 23.8286 35.4127 23.966 35.2434 23.966H32.2432V25.1254H35.2434C35.4127 25.1254 35.5495 25.2631 35.5495 25.4321V26.5366C35.5495 26.7056 35.4127 26.8432 35.2434 26.8432H30.832H30.8314C30.7493 26.8432 30.6748 26.8103 30.6199 26.7575C30.6183 26.7563 30.6165 26.7548 30.6153 26.7533C30.6138 26.7521 30.6123 26.7503 30.6111 26.7488C30.5583 26.6938 30.5254 26.6193 30.5254 26.5369V26.5366V19.6781V19.6778C30.5254 19.5957 30.558 19.5215 30.6105 19.4665L30.6105 19.4665C30.612 19.4647 30.6135 19.4629 30.6153 19.4611C30.6159 19.4604 30.6166 19.4598 30.6174 19.4592C30.6179 19.4587 30.6185 19.4583 30.6189 19.4578C30.6742 19.4044 30.7487 19.3712 30.8314 19.3712H30.832H35.2434C35.4127 19.3712 35.5495 19.5088 35.5495 19.6781V20.7824Z" fill="#2AE1AF"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* IMAGE */}
                <div className="md:flex h-screen md:w-2/5 items-center hidden justify-center">
                    <img src="src\assets\ismile-card-landingpage.png" alt="" className="md:h-2/5 lg:h-3/5 object-cover"/>
                </div>
            </div>

            {/* ABOUT US */}
            <div className="flex">
                {/* IMAGE */}
                <div className="flex h-screen w-1/2 items-center justify-center">
                    <img src="src\assets\template-frame.png" alt="" className="md:h-2/5 lg:h-3/5 object-cover"/>
                </div>
                {/* INFO */}
                <div className="flex w-1/2 h-screen items-center justify-center relative">
                    <div className="flex flex-col gap-4 ml-16 mr-24">
                        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2FEAA8] to-[#028CF3]">About i-Smile</h1>
                        <p className="font-mono text-xl text-[#515151] text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et repellat sit vitae eligendi voluptatum exercitationem autem qui, non mollitia tempora iusto sequi amet omnis quisquam explicabo veniam, sunt aut reiciendis! Vitae id, a eos vero totam, eveniet quae nulla saepe consectetur illum, modi laudantium asperiores dolore maxime cum quaerat velit?</p>
                    </div>
                    <img src="src/assets/eyes_3d.png" alt="" className="absolute -z-10 bottom-24 right-24"/>
                </div>

            </div>

            {/* ASISTANT */}
            {/* FOOTER */}
            <div className="mt-80 h-[300px] bg-gradient-to-r from-[#2FEAA8] to-[#028CF3] flex justify-center items-center">
                <div className="flex flex-col gap-2 w-[600px] text-white text-md">
                    <h3 className="font-bold text-xl">Address</h3>
                    <p>Gedung TULT 1405 Lantai 14, Jl. Telekomunikasi Terusan Buah Batu, Bandung-40257, Indonesia</p>
                    <p>Email: sealaboratory@telkomuniversity.ac.id</p>
                    <p>OA Line: @748waapd</p>
                </div>
            </div>
        </>
    )
}