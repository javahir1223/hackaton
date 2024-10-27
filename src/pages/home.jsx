import React from 'react';
import "./Home.css"
const Home = () => {
    return (
        <>
            <div className="home-page">
                <center>
                    <video className='video' loop autoPlay muted>
                        <source src={`video.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </center>
                <h1 style={{ textAlign: 'center', marginTop: '20px',fontSize:'40px' }}>Muammolar</h1>
                <nav className='Problems'>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/567064170e4c110e42b13b3e/1608507127191-Z7FKG7YB4CECM8JFK6DR/steps_1.png?format=500w" alt="" />
                        <p>Haydash ko'nikmalari va yo'lda xavfsiz xatti-harakatlarni bilishning etishmasligi xatolar va baxtsiz hodisalarga olib kelishi mumkin.</p>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/567064170e4c110e42b13b3e/1608507144288-XWCYJKCSYGCIZKIR1ETA/steps_2.png?format=500w" alt="" />
                        <p>Yo'lning yomon sharoitlari, masalan, chuqurchalar, yo'qolgan belgilar yoki yorug'likning etarli emasligi baxtsiz hodisalarga olib kelishi mumkin.</p>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/567064170e4c110e42b13b3e/1608507186413-SKEDJYZ3PHIMJRVFK3CW/steps_3.png?format=500w" alt="" />
                        <p>Avtomobilga noto'g'ri texnik xizmat ko'rsatish tormoz yoki rul boshqaruvidagi muammolar kabi muammolarni keltirib chiqarishi mumkin.</p>
                    </div>
                    <div>
                        <img src="https://images.squarespace-cdn.com/content/v1/567064170e4c110e42b13b3e/1608553343758-933VQIRIAC5YQIMRKK6F/steps_4.2.png?format=500w" alt="" />
                        <p>Yomg'ir, qor, tuman yoki kuchli shamol ko'rinish va tortishish darajasini pasaytirib, baxtsiz hodisalar ehtimolini oshiradi.</p>
                    </div>
                </nav>
                <center>
                    <a href="/page" >
                        <button style={{marginTop:'70px'}}>Muammolarni korish</button>
                    </a>
                </center>

                <center>
                <div className="statistika " style={{marginTop:'20px',display:'flex',textAlign:'center',alignItems:'center',justifyContent:'center',marginLeft:'80px'}}>
                    <div style={{alignItems:'center',fontSize:'20px',marginTop:'90px',marginLeft:'200px'}}>
                    <h1>Statistika</h1><br />
                    <p style={{width:'300px'}}>Bir yilda 2 000ta odam  avto halokatga uchrashadi  Umumiy ma'lumotlarga ko'ra, O'zbekistonda 2022 yilda 7,000 ga yaqin yo'l-transport hodisalari sodir bo'lgan, bu hodisalarda 1,500 dan ortiq odam o'lgan va minglab odamlar jarohatlangan. 2023 yil uchun statistik ma'lumotlar hali to'liq taqdim etilmagan bo'lishi mumkin.</p>
                    </div>
                    <img src="statistika.png" style={{width:'800px',borderRadius:'    '}} alt="statistika" />
                </div>
                </center>
            </div>
        </>
    );
}

export default Home;
