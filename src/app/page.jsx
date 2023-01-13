import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Card from './card';
config.autoAddCss = false


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <div className={styles.description}>
                    <Image
                        src="/cover-image.png"
                        alt='cover image'
                        className={styles.cover}
                        width={1600}
                        height={609}
                    />
                    <Image
                        src="/profile-pic.png"
                        alt="profile pic"
                        className={styles.profile}
                        width={400}
                        height={400}
                    />
                    <p>Sravan Pant</p>
                </div>
                <div className={styles.center}>
                    <Image
                        src="/cover-image.png"
                        alt='links'
                        className={styles.cover + ' ' + styles.cover1}
                        width={1600}
                        height={609}
                    />
                    <div className={styles.links}>
                        <a href='https://twitter.com/sravan_pant' target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.icons + ' ' + styles.faTwitter} icon={faTwitter} size='4x' /></a>
                        <a href='https://github.com/sravanpant' target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.icons + ' ' + styles.faGithub} icon={faGithub} size='4x' /></a>
                        <a href='https://www.linkedin.com/in/sravan-pant-496189228/' target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.icons + ' ' + styles.faLinkedin} icon={faLinkedin} size='4x' /></a>
                    </div>
                </div>
            </div>

            <div className={styles.about}>
                <Image
                    src="/cover-image.png"
                    alt='My Project'
                    className={styles.cover + ' ' + styles.project1}
                    width={1600}
                    height={609}
                />
                <Image
                    src="/cover-image.png"
                    alt='My Project'
                    className={styles.cover + ' ' + styles.project3}
                    width={1600}
                    height={609}
                />
                <div className={styles.heading}>
                    <div className={styles.title}>
                        <p>About Me</p>
                    </div>
                    <div className={styles.subject}>
                        <p>I am a learner, and <a href='https://learnweb3.io/' target="_blank" rel="noreferrer" >LearnWeb3</a> is where I am getting my web3 education right now.<br /> I have also gained understanding in full stack web programming by studying <a href='https://twitter.com/yu_angela' target="_blank" rel="noreferrer">Dr. Angela Yu</a> <a href='https://www.udemy.com/share/101qYw3@Jr5Owa1nA4rQUBzNyaRKBNI7NBXfWnd2FXDnt17YcdbPqYHPhMuHk-bNjmWyx9c8zQ==/' target="_blank" rel="noreferrer">course</a> on <a href='https://www.udemy.com/' target="_blank" rel="noreferrer">Udemy</a>.<br /> My favourite pastime is reading.<br /> My personal favourites among the well-known fiction writers are Agatha Christie and Enid Blyton.</p>
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                <Image
                    src="/cover-image.png"
                    alt='My Project'
                    className={styles.cover + ' ' + styles.project1}
                    width={1600}
                    height={609}
                />
                <Image
                    src="/cover-image.png"
                    alt='My Project'
                    className={styles.cover + ' ' + styles.project2}
                    width={1600}
                    height={609}
                />
                {/* To increase the length of my projects just copy and paste the below image again just below this */}
                <Image
                    src="/cover-image.png"
                    alt='My Project'
                    className={styles.cover + ' ' + styles.project2}
                    width={1600}
                    height={609}
                />
                <Image
                    src="/cover-image.png"
                    alt='My Project'
                    className={styles.cover + ' ' + styles.project3}
                    width={1600}
                    height={609}
                />
                <a href="https://github.com/sravanpant?tab=repositories" target="_blank" rel="noreferrer">
                    <div className={styles.heading}>
                        <div className={styles.title}>
                            <p>My Projects</p>
                        </div>
                    </div>
                </a>
                <div className={styles.card1}>
                    <a href="https://github.com/sravanpant/Keeper-App-react-project" target="_blank" rel="noreferrer">
                        <Card
                            image="/keeper-app.png"
                            alt="keeper-app"
                            width={600}
                            height={300}
                            title="Keeper App"
                            summary="A keeper project made using react for frontend"
                        />
                    </a>
                </div>
                <div className={styles.card2}>
                    <a href="https://github.com/sravanpant/dbank-project" target="_blank" rel="noreferrer">
                        <Card
                            image="/dbank-app.png"
                            alt="dbank-app"
                            width={600}
                            height={300}
                            title="DBank App"
                            summary="A dApp made with inspiration from cryptocurrency trading platform using motoko and internet computer blockchain from dfinity foundation"
                        />
                    </a>
                </div>
                <div className={styles.card3}>
                    <a href="https://github.com/sravanpant/My-Crypto-token" target="_blank" rel="noreferrer">
                        <Card
                            image="/cryptoToken.png"
                            alt="crypto token exchange"
                            width={600}
                            height={300}
                            title="My Crypto Token"
                            summary="A crypto currency exchange deployed on icp blockchain for my crypto token DANG. Inspired from curve.fi"
                        />
                    </a>
                </div>
                <div className={styles.card4}>
                    <a href="https://github.com/sravanpant/Whitelist-Dapp" target="_blank" rel="noreferrer">
                        <Card
                            image="/whitelist-dapp.png"
                            alt="whitelist dapp"
                            width={600}
                            height={300}
                            title="Whitelist Dapp"
                            summary="A whitelist for early access of NFT collection Crypto Devs"
                        />
                    </a>
                </div>
                <div className={styles.card5}>
                    <a href="https://github.com/sravanpant/NFT-Collection" target="_blank" rel="noreferrer">
                        <Card
                            image="/nft-collection.png"
                            alt="NFT collection"
                            width={600}
                            height={300}
                            title="NFT Collection"
                            summary="Build an NFT Collection. Now its time for you to launch your own NFT collection - Crypto Devs."
                        />
                    </a>
                </div>
                <div className={styles.card6}>
                    <a href="https://github.com/sravanpant/Initial-Coin-Offering" target="_blank" rel="noreferrer">
                        <Card
                            image="/ico.png"
                            alt="Initial Coin Offering"
                            width={600}
                            height={300}
                            title="Initial Coin Offering"
                            summary="Launch your own Initial Coin Offering. Launching a token for Crypto Devs called the Crypto Dev Token. Free to all our NFT holders, and for sale to public for ETH."
                        />
                    </a>
                </div>
                <div className={styles.card7}>
                    <a href="https://github.com/sravanpant/DEX" target="_blank" rel="noreferrer">
                        <Card
                            image="/dex.png"
                            alt="Decentralised Exchange"
                            width={600}
                            height={300}
                            title="Decentralised Exchange like Uniswap"
                            summary="Build your own Decentralized Exchange like Uniswap"
                        />
                    </a>
                </div>
            </div>
            <div>
                <div className={styles.center}>
                    <Image
                        src="/cover-image.png"
                        alt='links'
                        className={styles.cover + ' ' + styles.cover1}
                        width={1600}
                        height={609}
                    />
                    <div className={styles.links1}>
                        <a href='https://twitter.com/sravan_pant' target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.icons + ' ' + styles.faTwitter} icon={faTwitter} size='4x' /></a>
                        <a href='https://github.com/sravanpant' target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.icons + ' ' + styles.faGithub} icon={faGithub} size='4x' /></a>
                        <a href='https://www.linkedin.com/in/sravan-pant-496189228/' target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.icons + ' ' + styles.faLinkedin} icon={faLinkedin} size='4x' /></a>
                    </div>
                </div>
            </div>
        </main>
    )
}
