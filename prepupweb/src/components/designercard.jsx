// import luisLogo from '/images/logo/luis.svg'

const Designercard = () => {
    
    const desItems = [
        {
            cardPhoto: '/images/profile/luis.png',
            cardName: 'Luis Baptista',
            cardJob: 'PM & UI/UX Designer',
            cardRoleDetails: 'I have over 10 years experience as Full Stack Developer. I specialize in delivering both technical and design solutions.',
            cardColor: 'card-light-yellow',
            linkedIn: "luiscbaptistajr",
            portfolio:'https://luiscbaptistajr.com',
            logo: '/images/logo/luis.svg'
        },
        {
            cardPhoto: '/images/profile/darsh.png',
            cardName: 'Darshjot Sohi',
            cardJob: 'UI/UX Designer',
            cardRoleDetails: 'I have a background in graphic designing where I freelanced making illustrations. Now I’m working as a UI/UX designer for both web and mobile. I am still a beginner but I am willing to learn and improve.',
            cardColor: 'card-pink',
            linkedIn: "darshjotkaursohi",
            portfolio:'https://darshjotsohi.com',
            logo: './images/logo/darsh.svg'
        },
        {
            cardPhoto: '/images/profile/kyril.png',
            cardName: 'Kyril Evangelista',
            cardJob: 'Lead UI/UX Designer',
            cardRoleDetails: '3 years of experience as a Social Media Graphic Designer. My responsibilities are to co-produce and co-lead the PrepUp design team to create the branding/UI/UX of a market-ready app.',
            cardColor: 'card-dark-yellow',
            linkedIn: "kyrilevangelista",
            portfolio:'https://kyrillouis.online',
            logo: "./images/logo/kyril.svg"
        },
        {
            cardPhoto: '/images/profile/dani.png',
            cardName: 'Danielle Carvalho',
            cardJob: 'UI/UX Designer & Illustrator',
            cardRoleDetails: '7 years experience in customer service, 2 years experience in team leadership and training, 1 year experience as a social media content creator and graphic designer.',
            cardColor: 'card-nude',
            linkedIn: "daniellefpcarvalho",
            portfolio:'https://daniellecarvalho.ca/',
            logo: "./images/logo/dani.svg"
        }
    ];
   
    return (
        
        // <div className="w-70 grid grid-rows-2 grid-flow-col gap-24 team-bg designer">
        <div className="grid team-bg designer grid-flow-row gap-43 lg:w-70 lg:grid-rows-2 lg:grid-flow-col lg:gap-24">
        {
            desItems.map(({ cardPhoto, cardName, cardJob, cardRoleDetails, cardColor, linkedIn, portfolio, logo }, key) => (
                <div className="member-card" key={key}>
                    <img src={cardPhoto} className="card-profile" alt={cardName} />
                    <div className={'card-detail ' + cardColor}>
                        <h4 className="header-title-h4">{cardName}</h4>
                        <p className="body-text-p1">{cardJob}</p>
                        <p className="body-text-p2">{cardRoleDetails}</p>
                        <p className="body-link">
                            <a className="social-link" href={"https://www.linkedin.com/in/" + linkedIn} target="_blank">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <mask id="path-1-inside-1_3096_41488" fill="white">
                                            <path d="M17.5002 9.51942C16.605 9.51904 15.7236 9.74048 14.9348 10.1639C14.8628 9.97437 14.7349 9.81118 14.5679 9.69606C14.401 9.58094 14.203 9.51933 14.0002 9.51942H10.0002C9.86887 9.51934 9.7388 9.54516 9.61744 9.59538C9.49608 9.64561 9.38582 9.71927 9.29294 9.81214C9.20007 9.90502 9.12641 10.0153 9.07618 10.1366C9.02595 10.258 9.00014 10.3881 9.00022 10.5194V22.5194C9.00014 22.6508 9.02595 22.7808 9.07618 22.9022C9.12641 23.0236 9.20006 23.1338 9.29294 23.2267C9.38581 23.3196 9.49608 23.3932 9.61744 23.4435C9.7388 23.4937 9.86887 23.5195 10.0002 23.5194H14.0002C14.1316 23.5195 14.2616 23.4937 14.383 23.4435C14.5043 23.3932 14.6146 23.3196 14.7075 23.2267C14.8004 23.1338 14.874 23.0236 14.9242 22.9022C14.9745 22.7808 15.0003 22.6508 15.0002 22.5194V17.0194C15.0002 16.7542 15.1056 16.4998 15.2931 16.3123C15.4806 16.1248 15.735 16.0194 16.0002 16.0194C16.2654 16.0194 16.5198 16.1248 16.7073 16.3123C16.8949 16.4998 17.0002 16.7542 17.0002 17.0194V22.5194C17.0001 22.6508 17.026 22.7808 17.0762 22.9022C17.1264 23.0236 17.2001 23.1338 17.2929 23.2267C17.3858 23.3196 17.4961 23.3932 17.6174 23.4435C17.7388 23.4937 17.8689 23.5195 18.0002 23.5194H22.0002C22.1316 23.5195 22.2616 23.4937 22.383 23.4435C22.5044 23.3932 22.6146 23.3196 22.7075 23.2267C22.8004 23.1338 22.874 23.0236 22.9242 22.9022C22.9745 22.7808 23.0003 22.6508 23.0002 22.5194V15.0194C22.9984 13.5613 22.4184 12.1634 21.3873 11.1323C20.3562 10.1013 18.9583 9.52123 17.5002 9.51942ZM21.0002 21.5194H19.0002V17.0194C19.0002 16.2238 18.6841 15.4607 18.1215 14.8981C17.5589 14.3355 16.7959 14.0194 16.0002 14.0194C15.2046 14.0194 14.4415 14.3355 13.8789 14.8981C13.3163 15.4607 13.0002 16.2238 13.0002 17.0194V21.5194H11.0002V11.5194H13.0002V12.2225C13.0003 12.4297 13.0648 12.6318 13.1847 12.8008C13.3045 12.9698 13.4739 13.0974 13.6694 13.166C13.865 13.2346 14.077 13.2408 14.2761 13.1838C14.4753 13.1267 14.6519 13.0092 14.7815 12.8475C15.2302 12.2776 15.8458 11.862 16.5422 11.6588C17.2386 11.4556 17.9811 11.4749 18.6659 11.7141C19.3508 11.9533 19.9439 12.4004 20.3624 12.993C20.7809 13.5855 21.0039 14.294 21.0002 15.0194V21.5194ZM7.00022 9.51942H3.00022C2.86887 9.51934 2.7388 9.54516 2.61744 9.59538C2.49608 9.64561 2.38581 9.71927 2.29294 9.81214C2.20007 9.90502 2.12641 10.0153 2.07618 10.1366C2.02595 10.258 2.00014 10.3881 2.00022 10.5194V22.5194C2.00014 22.6508 2.02595 22.7808 2.07618 22.9022C2.12641 23.0236 2.20006 23.1338 2.29294 23.2267C2.38581 23.3196 2.49608 23.3932 2.61744 23.4435C2.7388 23.4937 2.86887 23.5195 3.00022 23.5194H7.00022C7.13156 23.5195 7.26163 23.4937 7.38299 23.4435C7.50435 23.3932 7.61462 23.3196 7.70749 23.2267C7.80037 23.1338 7.87402 23.0236 7.92425 22.9022C7.97448 22.7808 8.00029 22.6508 8.00022 22.5194V10.5194C8.00029 10.3881 7.97448 10.258 7.92425 10.1366C7.87402 10.0153 7.80036 9.90502 7.70749 9.81214C7.61462 9.71927 7.50435 9.64561 7.38299 9.59538C7.26163 9.54516 7.13156 9.51934 7.00022 9.51942ZM6.00022 21.5194H4.00022V11.5194H6.00022V21.5194ZM5.01486 2.06242C4.57723 2.03622 4.13883 2.09931 3.72634 2.24786C3.31385 2.39641 2.93589 2.62731 2.61543 2.92651C2.29498 3.22571 2.03873 3.58697 1.86227 3.98832C1.68582 4.38966 1.59284 4.8227 1.58899 5.26111C1.58515 5.69951 1.67051 6.13412 1.8399 6.5385C2.00929 6.94288 2.25916 7.30858 2.57431 7.61336C2.88947 7.91814 3.26332 8.15563 3.67314 8.31139C4.08296 8.46715 4.52018 8.53793 4.95822 8.51942H4.98654C5.42533 8.54548 5.86484 8.4818 6.27819 8.33227C6.69155 8.18274 7.07007 7.95049 7.39064 7.64973C7.7112 7.34896 7.96707 6.98599 8.14262 6.583C8.31817 6.18 8.4097 5.74544 8.41163 5.30588C8.41356 4.86631 8.32584 4.43097 8.15383 4.02645C7.98183 3.62193 7.72915 3.25673 7.41123 2.95316C7.09332 2.6496 6.71685 2.41404 6.30482 2.26089C5.89279 2.10774 5.45386 2.0402 5.01485 2.06242H5.01486ZM4.98655 6.51942H4.95822C4.78528 6.54042 4.60986 6.5242 4.44371 6.47185C4.27755 6.41949 4.12452 6.33222 3.99486 6.21588C3.8652 6.09954 3.76191 5.95682 3.69193 5.79729C3.62194 5.63776 3.58688 5.46512 3.58909 5.29093C3.58909 4.54483 4.14865 4.06241 5.01486 4.06241C5.18956 4.03912 5.36722 4.05354 5.53588 4.10469C5.70454 4.15585 5.86027 4.24255 5.9926 4.35896C6.12493 4.47537 6.23077 4.61879 6.303 4.77955C6.37524 4.94031 6.41218 5.11469 6.41135 5.29093C6.41135 6.03702 5.85178 6.51942 4.98655 6.51942Z"/>
                                        </mask>
                                        <path d="M17.5002 9.51942C16.605 9.51904 15.7236 9.74048 14.9348 10.1639C14.8628 9.97437 14.7349 9.81118 14.5679 9.69606C14.401 9.58094 14.203 9.51933 14.0002 9.51942H10.0002C9.86887 9.51934 9.7388 9.54516 9.61744 9.59538C9.49608 9.64561 9.38582 9.71927 9.29294 9.81214C9.20007 9.90502 9.12641 10.0153 9.07618 10.1366C9.02595 10.258 9.00014 10.3881 9.00022 10.5194V22.5194C9.00014 22.6508 9.02595 22.7808 9.07618 22.9022C9.12641 23.0236 9.20006 23.1338 9.29294 23.2267C9.38581 23.3196 9.49608 23.3932 9.61744 23.4435C9.7388 23.4937 9.86887 23.5195 10.0002 23.5194H14.0002C14.1316 23.5195 14.2616 23.4937 14.383 23.4435C14.5043 23.3932 14.6146 23.3196 14.7075 23.2267C14.8004 23.1338 14.874 23.0236 14.9242 22.9022C14.9745 22.7808 15.0003 22.6508 15.0002 22.5194V17.0194C15.0002 16.7542 15.1056 16.4998 15.2931 16.3123C15.4806 16.1248 15.735 16.0194 16.0002 16.0194C16.2654 16.0194 16.5198 16.1248 16.7073 16.3123C16.8949 16.4998 17.0002 16.7542 17.0002 17.0194V22.5194C17.0001 22.6508 17.026 22.7808 17.0762 22.9022C17.1264 23.0236 17.2001 23.1338 17.2929 23.2267C17.3858 23.3196 17.4961 23.3932 17.6174 23.4435C17.7388 23.4937 17.8689 23.5195 18.0002 23.5194H22.0002C22.1316 23.5195 22.2616 23.4937 22.383 23.4435C22.5044 23.3932 22.6146 23.3196 22.7075 23.2267C22.8004 23.1338 22.874 23.0236 22.9242 22.9022C22.9745 22.7808 23.0003 22.6508 23.0002 22.5194V15.0194C22.9984 13.5613 22.4184 12.1634 21.3873 11.1323C20.3562 10.1013 18.9583 9.52123 17.5002 9.51942ZM21.0002 21.5194H19.0002V17.0194C19.0002 16.2238 18.6841 15.4607 18.1215 14.8981C17.5589 14.3355 16.7959 14.0194 16.0002 14.0194C15.2046 14.0194 14.4415 14.3355 13.8789 14.8981C13.3163 15.4607 13.0002 16.2238 13.0002 17.0194V21.5194H11.0002V11.5194H13.0002V12.2225C13.0003 12.4297 13.0648 12.6318 13.1847 12.8008C13.3045 12.9698 13.4739 13.0974 13.6694 13.166C13.865 13.2346 14.077 13.2408 14.2761 13.1838C14.4753 13.1267 14.6519 13.0092 14.7815 12.8475C15.2302 12.2776 15.8458 11.862 16.5422 11.6588C17.2386 11.4556 17.9811 11.4749 18.6659 11.7141C19.3508 11.9533 19.9439 12.4004 20.3624 12.993C20.7809 13.5855 21.0039 14.294 21.0002 15.0194V21.5194ZM7.00022 9.51942H3.00022C2.86887 9.51934 2.7388 9.54516 2.61744 9.59538C2.49608 9.64561 2.38581 9.71927 2.29294 9.81214C2.20007 9.90502 2.12641 10.0153 2.07618 10.1366C2.02595 10.258 2.00014 10.3881 2.00022 10.5194V22.5194C2.00014 22.6508 2.02595 22.7808 2.07618 22.9022C2.12641 23.0236 2.20006 23.1338 2.29294 23.2267C2.38581 23.3196 2.49608 23.3932 2.61744 23.4435C2.7388 23.4937 2.86887 23.5195 3.00022 23.5194H7.00022C7.13156 23.5195 7.26163 23.4937 7.38299 23.4435C7.50435 23.3932 7.61462 23.3196 7.70749 23.2267C7.80037 23.1338 7.87402 23.0236 7.92425 22.9022C7.97448 22.7808 8.00029 22.6508 8.00022 22.5194V10.5194C8.00029 10.3881 7.97448 10.258 7.92425 10.1366C7.87402 10.0153 7.80036 9.90502 7.70749 9.81214C7.61462 9.71927 7.50435 9.64561 7.38299 9.59538C7.26163 9.54516 7.13156 9.51934 7.00022 9.51942ZM6.00022 21.5194H4.00022V11.5194H6.00022V21.5194ZM5.01486 2.06242C4.57723 2.03622 4.13883 2.09931 3.72634 2.24786C3.31385 2.39641 2.93589 2.62731 2.61543 2.92651C2.29498 3.22571 2.03873 3.58697 1.86227 3.98832C1.68582 4.38966 1.59284 4.8227 1.58899 5.26111C1.58515 5.69951 1.67051 6.13412 1.8399 6.5385C2.00929 6.94288 2.25916 7.30858 2.57431 7.61336C2.88947 7.91814 3.26332 8.15563 3.67314 8.31139C4.08296 8.46715 4.52018 8.53793 4.95822 8.51942H4.98654C5.42533 8.54548 5.86484 8.4818 6.27819 8.33227C6.69155 8.18274 7.07007 7.95049 7.39064 7.64973C7.7112 7.34896 7.96707 6.98599 8.14262 6.583C8.31817 6.18 8.4097 5.74544 8.41163 5.30588C8.41356 4.86631 8.32584 4.43097 8.15383 4.02645C7.98183 3.62193 7.72915 3.25673 7.41123 2.95316C7.09332 2.6496 6.71685 2.41404 6.30482 2.26089C5.89279 2.10774 5.45386 2.0402 5.01485 2.06242H5.01486ZM4.98655 6.51942H4.95822C4.78528 6.54042 4.60986 6.5242 4.44371 6.47185C4.27755 6.41949 4.12452 6.33222 3.99486 6.21588C3.8652 6.09954 3.76191 5.95682 3.69193 5.79729C3.62194 5.63776 3.58688 5.46512 3.58909 5.29093C3.58909 4.54483 4.14865 4.06241 5.01486 4.06241C5.18956 4.03912 5.36722 4.05354 5.53588 4.10469C5.70454 4.15585 5.86027 4.24255 5.9926 4.35896C6.12493 4.47537 6.23077 4.61879 6.303 4.77955C6.37524 4.94031 6.41218 5.11469 6.41135 5.29093C6.41135 6.03702 5.85178 6.51942 4.98655 6.51942Z" fill="#1B1B1B" stroke="#4D63B5" strokeWidth="2" mask="url(#path-1-inside-1_3096_41488)"/>
                                    </svg>
                                </span>
                                <span className="body-text-p2">{linkedIn}</span>
                            </a>
                            <a className="social-link" href={portfolio} target="_blank">
                                <span><img src={logo} alt="portfolio" /></span>
                                <span className="body-text-p2">{portfolio}</span>
                            </a>
                        </p>
                    </div>
                </div>
            ))
        }
            
        
        </div>
    )
}


export default Designercard;
