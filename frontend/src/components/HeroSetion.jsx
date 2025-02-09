import card1 from '../assets/card-1.png'
import card2 from '../assets/card-1.png'
import card3 from '../assets/card-1.png'
import '../App.css'

const HeroSection = () => {

    const my_cards = [
        {
            id: "medicine1",
            image: card1,
            title: "Medicine1",
            trend: "Best Seller"
        },
        {
            id: "medicine2",
            image: card2,
            title: "Medicine2 ",
            trend: "Mostly uSED "
        },
        {
            id: "medicine3",
            image: card3,
            title: "Medicine3",
            trend: "Medicine3"
        },

    ]

    return (
        <section className='section__container hero__container'>
            {my_cards.map((card) => {
                return (<div key={card.id} className='hero__card'>
                    <img src={card.image} alt={card.id} />
                    <div className='hero__content'>
                        <p>{card.trend}</p>
                        <h4>{card.title}</h4>
                        <a href="#">Discover More</a>
                    </div>
                </div>)
            })
            }
        </section>
    )
}

export default HeroSection
