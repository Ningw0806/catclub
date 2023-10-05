import './Trending.css'

function Trending() {
    return (
        <>
            <h2 className="trending-subtitle">Our Popular Cats</h2>
            <div className="cards">

                <div className="card">
                    <h3 className="card-name"><b>🏅️ Benson</b></h3>
                    <img src="/benson.png" alt="A tabby kitten named Benson was hiding in a box." className="card-pic" />
                    <p className="card-text">Benson was originally a stray cat who was lucky enough to be adopted by a kind-hearted person and now lives in New York. Benson is a British Shorthair cat with a chubby body and a cool expression, which has captured the hearts of many cat lovers. Moreover, no matter what clothes or accessories he wears, he looks good in them. He is confident in every photo, and even modeling is a piece of cake for him.</p>
                    <p className="card-text">Benson is a well-behaved and friendly cat who loves to spend time with his family. He enjoys lounging in the sun, playing with his favorite toys, and curling up on laps for a good snuggle. He is a fairly low-energy cat, preferring to relax and take things easy, but he is also curious and playful at times.
                        Benson is very social and loves attention. He is good with children and enjoys being petted and cuddled. He has a calm and gentle temperament, which makes him a perfect companion for people who enjoy a quiet and peaceful lifestyle.</p>
                    <a className="card-link" href="https://www.instagram.com/a_street_cat_named_benson/">Follow Benson on Instagram 👉</a>
                </div>

                <div className="card">
                    <h3 className="card-name"><b>🥈 Rexie</b></h3>
                    <img src="/rexie.png" alt="A long hair kitten named Rexie was staring at something." className="card-pic" />
                    <p className="card-text">
                        Rexie is a charming and adorable white tabby cat with soft, fluffy fur that is as white as snow. His round, expressive eyes are a striking shade of green that shine brightly against his white coat. With his perky ears and twitchy whiskers, he always seems to be curious about everything around him.</p>
                    <p className="card-text">Rexie is a medium-sized cat, with a slender and agile build that makes him an excellent jumper and climber. He has a playful and energetic personality, and he loves to run and play, chasing after toys and pouncing on imaginary prey.</p>
                    <p className="card-text">Despite his playful nature, Rexie is also a very affectionate cat who loves nothing more than cuddling up with his humans for a good snuggle. He is incredibly loyal and will follow his owners around the house, always ready to offer a comforting purr or a gentle nudge with his paw.</p>
                    <a className="card-link" href="https://www.instagram.com/rexiecat/">Follow Rexie on Instagram 👉</a>
                </div>

                <div className="card">
                    <h3 className="card-name"><b>🥉 Aurora</b></h3>
                    <img src="/aurora.png" alt="A snow cat named Aurora was lying on the bed." className="card-pic" />
                    <p className="card-text">Aurora is a stunning Ragdoll cat with luxurious, silver-tipped fur that gives her an air of elegance and sophistication. Her fur is incredibly soft and silky, and it has a subtle shimmer that catches the light beautifully. She has large, round eyes that are a brilliant shade of green, and they seem to sparkle with intelligence and curiosity.</p>
                    <p className="card-text">Aurora has a slender and graceful body, with long legs and a tail that swishes gracefully behind her. She moves with an effortless grace, making her a joy to watch as she glides across the room. Her refined demeanor is matched by her gentle and affectionate nature, as she loves nothing more than to curl up in her owner's lap for a good snuggle.</p>
                    <p className="card-text">Despite her aristocratic appearance, Aurora is also a playful and energetic cat who loves to chase toys and pounce on imaginary prey. She has a mischievous streak that makes her a lot of fun to be around, and her antics are sure to bring a smile to your face.</p>
                    <a className="card-link" href="https://www.instagram.com/aurorapurr/">Follow Aurora on Instagram 👉</a>
                </div>

            </div>
        </>
    );
}

export default Trending;