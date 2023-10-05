import AccordionSection from "./AccordionSection";
import './Breeds.css';

function Breeds() {
    return (
        <div>
            <h2 className="breeds-subtitle">Thinking about getting a cat but not sure which breed is right for you?
                < br />
                <span className="suggestion-text">We can help!</span>
            </h2>

            <div className="accordion-item">
                <AccordionSection title={"Abyssinian Cats"} children={"Abyssinian cats are a popular and beloved breed known for their distinctive ticked fur and lively personalities. These intelligent and curious cats thrive in environments that offer plenty of stimulation and play opportunities, and they make wonderful companions for those looking for an active and engaging pet."} />
            </div>

            <div className="accordion-item">
                <AccordionSection title={"Bengal Cats"} children={"Bengal cats are a unique and fascinating breed known for their distinctive wild appearance and energetic personalities. These intelligent and playful cats have a strong hunting instinct and love to climb and explore their surroundings. With their striking markings and athletic builds, Bengal cats are a favorite among cat lovers looking for a companion that is both beautiful and entertaining."} />
            </div>

            <div className="accordion-item">
                <AccordionSection title={"Birman Cats"} children={"Birman cats are a gentle and affectionate breed known for their striking blue eyes and beautiful colorpoint coats. These intelligent and loyal cats are often referred to as 'sacred cats of Burma' due to their revered status in their country of origin. Birman cats are known for their calm and gentle nature, making them a popular choice for families with children or other pets. With their loving personalities and stunning appearance, Birman cats are a beloved breed among cat enthusiasts."} />
            </div>

            <div className="accordion-item">
                <AccordionSection title={"Chartreux Cat Breed"} children={"The Chartreux is a breed of domestic cat known for its distinctive blue-gray coat and copper-colored eyes. This breed has a robust, muscular build and a friendly, laid-back personality. They are known for being quiet and reserved, but also enjoy playing and spending time with their humans. Chartreux cats are believed to have originated in France and were used as working cats for hunting and controlling rodent populations in monasteries. They make great pets for families and individuals who are looking for a calm and affectionate feline companion."} />
            </div>

            <div className="accordion-item">
                <AccordionSection title={"Cornish Rex Cats"} children={"Cornish Rex cats are a unique and fascinating breed known for their curly and soft coats, which make them look like they are wearing a coat made of plush velvet. These playful and active cats have a slender build and long legs, giving them an elegant appearance. Cornish Rex cats are known for their intelligence and curiosity, often exploring every nook and cranny of their surroundings. They are also highly social and enjoy spending time with their humans, often cuddling up on laps for hours on end. With their charming personalities and distinctive looks, Cornish Rex cats are a popular choice among cat enthusiasts."} />
            </div>

            <div className="accordion-item">
                <AccordionSection title={"Himalayan Cat Breed"} children={"The Himalayan, also known as the Colorpoint Persian, is a breed of domestic cat that is a cross between the Persian and the Siamese. This breed is known for its long, silky coat, which comes in a variety of colors, including seal, blue, chocolate, and lilac. Himalayan cats have striking blue eyes and a distinctively flat face, similar to their Persian ancestors. They have a sweet and gentle personality and are known for their affectionate nature. Himalayan cats require regular grooming to maintain their long coats, and they thrive in a calm and stable environment. They make great indoor pets for families and individuals who are looking for a loyal and loving companion."} />
            </div>

            <div className="accordion-item">
                <AccordionSection title={"Japanese Bobtail Cats"} children={"Japanese Bobtail cats are a unique and distinct breed known for their short, pom-pom-like tails and friendly personalities. These playful and social cats have a long history in Japan, where they are considered a symbol of good luck and prosperity. Japanese Bobtail cats are known for their intelligence and adaptability, making them easy to train and great companions for families with children or other pets. With their charming personalities and unique appearance, Japanese Bobtail cats are a beloved breed among cat lovers."} />
            </div>

            <div className="accordion-item">
                <AccordionSection title={"Scottish Fold Cats"} children={"Scottish Fold cats are a charming and affectionate breed known for their distinctive folded ears, which give them a cute and unique appearance. These intelligent and social cats are often described as being 'owl-like' in their appearance due to their large, round eyes and expressive faces. Scottish Fold cats are known for their playful and friendly personalities, and they enjoy spending time with their humans, often following them around the house. With their adorable looks and loving personalities, Scottish Fold cats are a popular choice among cat enthusiasts."} />
            </div>

        </div>
    )
}

export default Breeds;