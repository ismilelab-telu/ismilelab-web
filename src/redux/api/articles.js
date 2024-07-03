import { createSlice } from '@reduxjs/toolkit';

// Hardcoded articles data
const initialState = {
  articles: [
    { id: 1, type: 'News',
    title: 'Akhir Pekan Edukatif di Telkom University: Workshop Kecerdasan Buatan',
    authorImage: 'https://via.placeholder.com/50',
    author: 'Galih Karya', date: '3 Juli 2024',
    readTime: '10 min read',
    image: '../../article-images/article-1.JPG',
    summary: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et repellat sit vitae eligendi voluptatum exercitationem autem quia.',
    content: `
      <p>Pada tanggal 8 Juni 2024, sebuah workshop tentang pengaplikasian pembelajaran mesin yang bernama &ldquo;Eyes of Tomorrow: Navigating the Landscape of AI Object Detection and Robotic with AREI&rdquo; diadakan di Gedung Kuliah Umum, Telkom University, Bandung. Kegiatan ini bertujuan untuk memberikan pengetahuan dan keterampilan dalam bidang kecerdasan buatan (<em>Artificial Intelligence</em>) khususnya Machine Learning untuk pengembangan robotika.</p>
      <p>Workshop ini diselenggarakan oleh Laboratorium I-Smile (<em>Intelligent System and Machine Learning</em>), Telkom University, Bandung, yang merupakan bagian dari Laboratorium RAID (<em>Realm of Artificial Intelligence Design</em>) yang berfokus pada pengembangan</p>
      <p>Kecerdasan Buatan. Meskipun industri robotika di Indonesia telah berkembang pesat, masih terkendala oleh minimnya penguasaan ilmu AI di kalangan masyarakat. Banyak lembaga pendidikan hanya mempelajari konstruksi dan pengoperasian robot tanpa mendalami teknologi AI yang penting untuk perkembangan robotika lanjutan. Untuk mengatasi hal ini, Laboratorium (I-Smile) mengadakan workshop tentang <em>Object Detection</em> pada Robotika untuk meningkatkan penguasaan AI dan Machine Learning di kalangan siswa, demi kemajuan teknologi robotika Indonesia.</p>
      <p>Workshop dimulai dengan sambutan dari ketua pelaksana (Nadia Mutia Hanin) dan pembina laboratorium RAID (Dr. Astri Novianty, S.T., M.T.), kemudian diikuti oleh sesi materi dari ketua organisasi AREI (Dr. Ir. Sony Sumarto, M.T.) dan pembina laboratorium I-Smile (Casi Setianingsih, S.T., M.T.). Selanjutnya, adalah sesi demo. Pada sesi ini, asisten dari laboratorium I-Smile membimbing peserta melakukan hands-on pada proyek pembelajaran mesin yang sudah disiapkan sebelumnya. Dilanjutkan dengan sesi kuis bersama dan diakhiri dengan sesi foto bersama.</p>
      <p>Workshop ini mendukung program SDGs (<em>Sustainable Development Goals</em>), dikarenakan program pengabdian masyarakat dari Laboratorium I-Smile dengan judul &ldquo;Workshop Eyes of Tomorrow: Navigating the Landscape of Al Object Detection and Robotic with AREI&rdquo; sangat relevan terhadap tujuan pembangunan berkelanjutan dari SDGs ke-9, yaitu Industri, Inovasi, dan Infrastruktur. Dengan adanya kegiatan workshop ini diharapkan dapat meningkatkan pemahaman dan pengalaman peserta dalam ilmu kecerdasan buatan dan robotika, sehingga pada akhirnya akan berdampak pada kemajuan teknologi Indonesia.</p>
      <p>Dengan kesuksesan workshop ini, Laboratorium I-Smile, Telkom University, Bandung, merencanakan untuk mengadakan kegiatan serupa di masa mendatang. Bagi yang ingin tahu lebih banyak tentang laboratorium kami, bisa mengunjungi situs di <a href="https://ismilelab-telu.com/">ismilelab-telu.com</a>.</p>
    `,
    url: '#' 
  },
    { id: 2, type: 'Announcements', title: 'Rekrutasi Asisten Laboratorium iSmile 2024/2025', authorImage: 'https://via.placeholder.com/50', author: 'Alifia Mutiara', date: '20 Oktober 2024', readTime: '5 min read', image: 'https://via.placeholder.com/150', summary: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', url: '#' },
    { id: 3, type: 'Tutorials', title: 'Membuat Klasifikasi dengan YOLO V10',authorImage: 'https://via.placeholder.com/50', author: 'Galih Karya', date: '18 November 2024', readTime: '15 min read', image: 'https://via.placeholder.com/150', summary: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', url: '#' },
    { id: 4, type: 'News', title: 'Computers built like brains could be a ‘competition killer’',authorImage: 'https://via.placeholder.com/50', author: 'Samuel Robert R.', date: '22 Juni 2024', readTime: '22 min read', image: 'https://via.placeholder.com/150', summary: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', url: '#' }
  ]
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    // Reducers for any future actions
  }
});

export default articlesSlice.reducer;
