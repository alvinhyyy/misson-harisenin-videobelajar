export const ADMIN_FEE = 7000

export const paymentGroups = [
  {
    id: 'bank',
    title: 'Transfer Bank',
    methods: [
      { id: 'bca', name: 'Bank BCA', short: 'BCA', color: '#0060AF', prefix: '11739' },
      { id: 'bni', name: 'Bank BNI', short: 'BNI', color: '#F15A23', prefix: '8241' },
      { id: 'bri', name: 'Bank BRI', short: 'BRI', color: '#00529C', prefix: '26215' },
      { id: 'mandiri', name: 'Bank Mandiri', short: 'mandiri', color: '#003D79', prefix: '89508' },
    ],
  },
  {
    id: 'ewallet',
    title: 'E-Wallet',
    methods: [
      { id: 'dana', name: 'Dana', short: 'DANA', color: '#118EEA', prefix: '3901' },
      { id: 'ovo', name: 'OVO', short: 'OVO', color: '#4C3494', prefix: '39358' },
      { id: 'linkaja', name: 'LinkAja', short: 'LinkAja', color: '#E82127', prefix: '0911' },
      { id: 'shopeepay', name: 'Shopee Pay', short: 'ShopeePay', color: '#EE4D2D', prefix: '1122' },
    ],
  },
  {
    id: 'card',
    title: 'Kartu Kredit/Debit',
    methods: [{ id: 'card', name: 'Kartu Kredit/Debit', short: 'VISA', color: '#1A1F71', prefix: '4000' }],
  },
]

export const paymentMethods = paymentGroups.flatMap((group) =>
  group.methods.map((method) => ({ ...method, groupId: group.id })),
)

export const findPaymentMethod = (id) => paymentMethods.find((method) => method.id === id)

export function getPaymentGuides(method) {
  if (!method) return []

  if (method.groupId === 'bank') {
    return [
      {
        title: `ATM ${method.short.toUpperCase()}`,
        steps: [
          `Masukkan kartu ATM dan PIN ${method.short.toUpperCase()} Anda`,
          'Di menu utama, pilih "Transaksi Lainnya". Pilih "Transfer". Pilih "Ke Virtual Account"',
          'Masukkan nomor Virtual Account',
          'Pastikan data Virtual Account Anda benar, kemudian masukkan angka yang perlu Anda bayarkan, kemudian pilih "Benar"',
          'Cek dan perhatikan konfirmasi pembayaran dari layar ATM, jika sudah benar pilih "Ya", atau pilih "Tidak" jika data di layar masih salah',
          'Transaksi Anda sudah selesai. Pilih "Tidak" untuk tidak melanjutkan transaksi lain',
        ],
      },
      {
        title: `Mobile Banking ${method.short.toUpperCase()}`,
        steps: [
          `Buka aplikasi mobile banking ${method.short.toUpperCase()}`,
          'Pilih menu "Transfer", kemudian pilih "Virtual Account"',
          'Masukkan nomor Virtual Account, lalu pilih "OK"',
          'Klik tombol "Send" untuk melakukan transfer',
          'Masukkan PIN Anda untuk mengotorisasi transaksi',
          'Transaksi Anda telah selesai',
        ],
      },
      {
        title: `Internet Banking ${method.short.toUpperCase()}`,
        steps: [
          'Login ke internet banking',
          'Pilih "Transfer", kemudian pilih "Transfer ke Virtual Account"',
          'Masukkan nomor Virtual Account',
          'Pilih "Lanjutkan" untuk melanjutkan pembayaran',
          'Masukkan kode token yang muncul, lalu klik tombol "Kirim"',
          'Pembayaran telah selesai',
        ],
      },
    ]
  }

  if (method.groupId === 'ewallet') {
    return [
      {
        title: `Aplikasi ${method.name}`,
        steps: [
          `Buka aplikasi ${method.name} di ponselmu`,
          'Pilih menu "Bayar" atau "Transfer"',
          'Masukkan kode pembayaran yang tertera di halaman ini',
          'Periksa detail transaksi, lalu konfirmasi dengan PIN',
          'Pembayaran telah selesai',
        ],
      },
    ]
  }

  return [
    {
      title: 'Kartu Kredit/Debit',
      steps: [
        'Klik "Bayar Sekarang"',
        'Masukkan nomor kartu, masa berlaku, dan CVV',
        'Masukkan kode OTP yang dikirim oleh bank penerbit',
        'Pembayaran telah selesai',
      ],
    },
  ]
}

export const ORDER_STATUS = {
  paid: { label: 'Berhasil', tone: 'success' },
  pending: { label: 'Belum Bayar', tone: 'warning' },
  failed: { label: 'Gagal', tone: 'danger' },
}
