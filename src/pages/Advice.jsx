// Tailwind css
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p



const Advice = () => {
    const heroImageUrl = 'https://images.pexels.com/photos/163016/crash-test-collision-60-km-h-distraction-163016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const adviceIcons = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjaOS_IztEy-fc5IpwQVJZjxyusiq25iHIw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmow2HKllPpdbBP4yS8xWh4wHlLOMgZKVvbQ&s',
      'https://www.wikihow.com/images/thumb/0/07/Pay-Maximum-Attention-While-Driving-Step-4-Version-2.jpg/v4-460px-Pay-Maximum-Attention-While-Driving-Step-4-Version-2.jpg',
      'https://www.gbnews.com/media-library/drink-driving.jpg?id=52465900&width=1200&height=800&quality=90&coordinates=0%2C0%2C0%2C0',
      'https://media.istockphoto.com/id/1365012188/vector/keep-a-safe-distance-of-the-road-vector-illustration-top-view-in-flat-design.jpg?s=612x612&w=0&k=20&c=9UziAUssSdvHjEzAHMtYM-lg2_jd9IuDroSq6qYwzIk=',
      'https://media.istockphoto.com/id/1365012188/vector/keep-a-safe-distance-of-the-road-vector-illustration-top-view-in-flat-design.jpg?s=612x612&w=0&k=20&c=9UziAUssSdvHjEzAHMtYM-lg2_jd9IuDroSq6qYwzIk=',
      'https://www.hseblog.com/wp-content/uploads/2023/03/How-To-Drive-Safely-In-The-Rain-Rain-Safety-Tips-For-Driving.webp',
      'https://media.istockphoto.com/id/1346521171/vector/pedestrian-crossing-road-sign-vector-illustration.jpg?s=612x612&w=0&k=20&c=TCk9UMbUPmQmhnllSx6U_IfuAPbTLoyzkCcK5CYxIzg=',
      'https://avatars.dzeninfra.ru/get-zen_doc/1711517/pub_606845bf4e1bd50949d99e6f_606845ca09a6b71702ece6c2/scale_1200'
    ];
  
  
    const maslahatlarData = [
      { title: 'Doimo belbog‘ingizni taqing', description: 'Hatto qisqa safarlar uchun ham xavfsizlik belbog‘ini taqing. Bu avtohalokatda jarohat olish xavfini kamaytiradi.' },
      { title: 'Tezlikka rioya qiling', description: 'Tezlik nafaqat avtohalokat ehtimolini, balki uning jiddiyligini ham oshiradi. Tezlik chegarasiga rioya qiling va yo‘l sharoitiga moslang.' },
      { title: 'E’tibor qaratishni unutmang', description: 'Haydash paytida diqqatni jamlang. Telefon yoki boshqa diqqatni chalg‘ituvchi narsalardan foydalanmang.' },
      { title: 'Mast holda haydamang', description: 'Alkogol yoki giyohvand moddalar iste’mol qilgandan so‘ng hech qachon haydamang. Bu sizning tezkorlik va xavfsiz qaror qabul qilish qobiliyatingizni pasaytiradi.' },
      { title: 'Masofani saqlang', description: 'Oldingizdagi mashinadan xavfsiz masofada turing. Bu to‘xtashga vaqt ajratish imkonini beradi.' },
      { title: 'Yoritishni to‘g‘ri ishlating', description: 'Chiroqlar, stop-signal va indikatorlarni to‘g‘ri ishlating va ular ishlayotganiga ishonch hosil qiling.' },
      { title: 'Yomon ob-havoda ehtiyot bo‘ling', description: 'Yomg‘ir, tuman yoki qor paytida ehtiyotkorlik bilan harakatlaning, yo‘lni yo‘qotmaslik uchun sekinroq yurishga harakat qiling.' },
      { title: 'Piyodalar yo‘laklariga e’tibor bering', description: 'Ayniqsa, piyodalar yo‘lagi va shahar hududlarida piyodalarni ko‘rib yuring.' },
      { title: 'Transport vositasi holatini kuzatib turing', description: 'Tormoz, shina va boshqa muhim qismlarni muntazam tekshirib, mashinangizni yaxshi holatda saqlang.' }
    ];
  
    return (
      <>
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white flex flex-col items-center">
          <header className="w-full relative">
            <img src={heroImageUrl} alt="Yo'l xavfsizligi" className="w-full h-64 object-cover opacity-80" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
              <h1 className="text-5xl font-extrabold tracking-wide mb-4 animate-pulse">Avtohalokatdan Xavfsizlik Maslahatlari</h1>
              <p className="text-lg text-blue-200 font-medium">
                Yo‘lda xavfsiz bo‘lish uchun ushbu muhim maslahatlarni o‘qing.
              </p>
            </div>
          </header>


          <main className="flex-grow container mx-auto px-6 py-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {maslahatlarData.map((maslahat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white text-gray-800 rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-blue-50"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full transform scale-125 group-hover:scale-150 transition-transform duration-500"></div>
              <img
                src={adviceIcons[index]}
                alt={maslahat.title}
                className="relative w-16 h-16 mx-auto mb-4 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-2xl font-semibold mb-4 relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                {maslahat.title}
              </h3>
              <p className="text-gray-700 relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                {maslahat.description}
              </p>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-600 transition-colors duration-500"></div>
            </div>
          ))}
        </main>
      </div>
    </>
  )
}



export default Advice
  