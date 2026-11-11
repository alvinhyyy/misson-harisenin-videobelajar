export const LESSON_TYPES = {
  pretest: { icon: 'file-edit', label: 'Pertanyaan' },
  video: { icon: 'play-circle', label: 'Menit' },
  summary: { icon: 'book', label: 'Menit' },
  quiz: { icon: 'file-check', label: 'Pertanyaan' },
}

export const courseIncludes = [
  { icon: 'file-check', label: 'Ujian Akhir' },
  { icon: 'video', label: '49 Video' },
  { icon: 'book', label: '7 Dokumen' },
  { icon: 'award', label: 'Sertifikat' },
  { icon: 'file-edit', label: 'Pretest' },
]

export const courseLanguage = 'Bahasa Indonesia'

export const longDescription =
  'Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan orang dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe, dan maket, dan menguji desain untuk mendapatkan umpan balik.'

export const tutorBio =
  'Berkarier di bidang ini selama lebih dari 3 tahun. Saat ini aktif berbagi pengalaman praktis kepada ribuan siswa videobelajar.'

export const syllabus = [
  {
    id: 's1',
    title: 'Introduction to Course 1: Foundations of User Experience Design',
    items: ['The basics of user experience design', 'Jobs in the field of user experience', 'The product development life cycle'],
  },
  {
    id: 's2',
    title: 'Universal design, inclusive design, and equity-focused design',
    items: ['Universal design', 'Inclusive design', 'Equity-focused design'],
  },
  {
    id: 's3',
    title: 'Introduction to design sprints',
    items: ['What is a design sprint', 'Planning a design sprint', 'Running a retrospective'],
  },
  {
    id: 's4',
    title: 'Introduction to UX research',
    items: ['The role of UX research', 'Research methods', 'Bias in UX research'],
  },
]

export const modules = [
  {
    id: 'm1',
    title: 'Introduction to HR',
    lessons: [
      { id: 'pretest', type: 'pretest', title: 'Pre-Test: Introduction to HR', amount: 10 },
      {
        id: 'video-1',
        type: 'video',
        title: 'Video: Introduction to HR',
        amount: 12,
        heading: 'Praktikkan Skill dengan Technical Book',
        description: 'Pelajari dan praktikkan skill teknis dalam berbagai industri dengan Technical Book Riselearn',
      },
      {
        id: 'video-2',
        type: 'video',
        title: 'Video: Peran HR di Perusahaan',
        amount: 12,
        heading: 'Peran HR di Perusahaan Modern',
        description: 'Kenali tanggung jawab tim HR mulai dari rekrutmen hingga pengembangan karyawan.',
      },
      {
        id: 'video-3',
        type: 'video',
        title: 'Video: Proses Rekrutmen',
        amount: 12,
        heading: 'Proses Rekrutmen yang Efektif',
        description: 'Pelajari alur rekrutmen dari membuka lowongan sampai onboarding karyawan baru.',
      },
      { id: 'summary', type: 'summary', title: 'Rangkuman: Introduction to HR', amount: 12 },
      { id: 'quiz', type: 'quiz', title: 'Quiz: Introduction to HR', amount: 10 },
    ],
  },
  {
    id: 'm2',
    title: 'Evaluasi Akhir',
    lessons: [
      {
        id: 'video-4',
        type: 'video',
        title: 'Video: Studi Kasus HR',
        amount: 12,
        heading: 'Studi Kasus: Mengelola Tim yang Berkembang',
        description: 'Terapkan semua materi pada studi kasus nyata sebelum ujian akhir.',
      },
      { id: 'final', type: 'quiz', title: 'Ujian Akhir: Introduction to HR', amount: 10 },
    ],
  },
]

export const lessons = modules.flatMap((module) => module.lessons)

export const QUIZ_RULES = {
  pretest: {
    label: 'Pretest',
    intro: 'Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman awalmu terkait materi yang akan kamu pelajari',
    passingScore: null,
    duration: 5,
    note: 'Jangan khawatir, total skor tidak akan memengaruhi kelulusan dan penilaian akhirmu dalam rangkaian kelas ini',
    startLabel: 'Mulai Pre-Test',
  },
  quiz: {
    label: 'Quiz',
    intro: 'Kerjakan quiz untuk menguji pemahamanmu terhadap materi yang sudah kamu pelajari',
    passingScore: 60,
    duration: 10,
    note: 'Kamu bisa mengulang quiz jika nilaimu belum mencapai syarat kelulusan',
    startLabel: 'Mulai Quiz',
  },
}
