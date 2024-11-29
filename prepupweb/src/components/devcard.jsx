const Devcard = () => {
    
    const devItems = [
        {
            cardPhoto: '/images/profile/shun.png',
            cardName: 'Shunsaku Sugita',
            cardJob: 'Lead Full-Stack Developer',
            cardRoleDetails: '5 years experience as a backend engineer and 2 years experience as a salesperson in the tech industry.',
            cardColor: 'card-light-yellow',
            linkedIn: "shunsakusugita",
            github:'shunsaku-sugita',
        },
        {
            cardPhoto: '/images/profile/khushal.png',
            cardName: 'Khushal Khunt',
            cardJob: 'Full-Stack Developer',
            cardRoleDetails: 'I have 3 years of software development experience in mobile',
            cardColor: 'card-pink',
            linkedIn: "khushal-khunt",
            github:'FTW-Khushal',
        },
        {
            cardPhoto: '/images/profile/blanca.png',
            cardName: 'Blanca Liliana Flores',
            cardJob: 'Front-End Developer',
            cardRoleDetails: 'I’m looking to not only improve my coding skills but also improve my understanding on UI/UX.',
            cardColor: 'card-dark-yellow',
            linkedIn: "blanca-sf",
            github:'Blanca-sf',
        },
        {
            cardPhoto: '/images/profile/yohei.png',
            cardName: 'Yohei Tarutani',
            cardJob: 'Front-End Developer',
            cardRoleDetails: 'I am pursuing my next career as a software developer(most probably a front-end developer)',
            cardColor: 'card-nude',
            linkedIn: "yohei-tarutani",
            github:'yohei-tarutani',
        }
    ];
   
    return (
        
        <div className="w-70 grid grid-rows-2 grid-flow-col gap-24 team-bg dev">
        {
            devItems.map(({ cardPhoto, cardName, cardRoleDetails, cardJob, cardColor, linkedIn, github }, key) => (
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
                            <a className="social-link" href={"https://github.com/" + github} target="_blank">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                    <path d="M10.3643 21.0215C10.3642 20.8748 10.332 20.73 10.2697 20.5972C10.2075 20.4644 10.1168 20.3469 10.0041 20.2531C9.89137 20.1592 9.75941 20.0913 9.61753 20.0542C9.47566 20.017 9.32735 20.0115 9.18312 20.0381C7.87404 20.2783 6.22121 20.3145 5.78175 19.0801C5.39855 18.1241 4.76382 17.2896 3.94484 16.6651C3.8864 16.6333 3.83071 16.5967 3.77834 16.5557C3.70666 16.3666 3.57935 16.2037 3.4132 16.0885C3.24705 15.9733 3.04987 15.9111 2.84767 15.9102H2.84279C2.57839 15.9101 2.32472 16.0148 2.1373 16.2013C1.94988 16.3878 1.84399 16.6409 1.84279 16.9053C1.83888 17.7208 2.65379 18.2432 2.98439 18.42C3.37423 18.8117 3.68754 19.2727 3.90822 19.7793C4.27248 20.8028 5.33107 22.3555 8.37404 22.1553C8.37504 22.1905 8.37599 22.2237 8.37648 22.254L8.38087 22.5216C8.38087 22.7868 8.48622 23.0411 8.67376 23.2287C8.8613 23.4162 9.11565 23.5216 9.38087 23.5216C9.64608 23.5216 9.90044 23.4162 10.088 23.2287C10.2755 23.0411 10.3809 22.7868 10.3809 22.5216L10.376 22.2032C10.3711 22.0137 10.3643 21.7393 10.3643 21.0215ZM21.0313 5.89549C21.063 5.77049 21.0943 5.63182 21.1216 5.47557C21.2833 4.36116 21.1423 3.22376 20.7134 2.18257C20.6593 2.04684 20.5761 1.92458 20.4698 1.82438C20.3634 1.72417 20.2364 1.64844 20.0977 1.6025C19.7417 1.48238 18.4273 1.24605 15.9136 2.8525C13.8241 2.3608 11.6491 2.3608 9.5596 2.8525C7.05617 1.26958 5.74855 1.48438 5.39601 1.59766C5.25387 1.64174 5.1234 1.71707 5.01416 1.81812C4.90491 1.91917 4.81966 2.04339 4.76466 2.18166C4.32696 3.24284 4.1875 4.40344 4.36134 5.5381C4.38576 5.66603 4.41212 5.7842 4.43947 5.89259C3.61104 6.99603 3.16978 8.34196 3.1841 9.72169C3.1814 10.0295 3.19558 10.3373 3.22658 10.6436C3.56058 15.2461 6.56058 16.6279 8.65089 17.1026C8.60744 17.2276 8.56789 17.3613 8.53273 17.503C8.47007 17.7602 8.512 18.0319 8.64933 18.2583C8.78665 18.4847 9.00817 18.6475 9.2653 18.7108C9.52243 18.7742 9.79418 18.733 10.021 18.5962C10.2478 18.4595 10.4111 18.2384 10.4751 17.9815C10.5387 17.6483 10.7018 17.3422 10.9429 17.1035C11.0886 16.9759 11.1942 16.8087 11.2466 16.6222C11.2991 16.4357 11.2963 16.238 11.2384 16.0531C11.1806 15.8683 11.0703 15.7042 10.9209 15.5808C10.7715 15.4575 10.5895 15.3802 10.397 15.3584C6.94289 14.9639 5.44337 13.5567 5.21779 10.46C5.1928 10.2147 5.18155 9.96823 5.1841 9.7217C5.16805 8.73836 5.49293 7.77978 6.10353 7.00881C6.16488 6.92844 6.23023 6.85119 6.29933 6.77736C6.42176 6.64037 6.50408 6.47228 6.53724 6.29157C6.57041 6.11085 6.55314 5.9245 6.48733 5.75295C6.41986 5.57248 6.36792 5.38658 6.33206 5.19728C6.25059 4.659 6.27731 4.10987 6.41066 3.58204C7.27979 3.82752 8.09777 4.22708 8.82566 4.76172C8.94603 4.8419 9.08223 4.89525 9.22503 4.91817C9.36783 4.94108 9.51388 4.93303 9.6533 4.89454C11.6744 4.34604 13.8052 4.34639 15.8261 4.89554C15.9663 4.93398 16.1131 4.94158 16.2565 4.91781C16.3999 4.89404 16.5364 4.83947 16.6567 4.75785C17.3812 4.22099 18.1957 3.81785 19.062 3.56742C19.1947 4.08258 19.2244 4.61888 19.1494 5.14554C19.1132 5.35308 19.0566 5.55654 18.9804 5.75297C18.9146 5.92452 18.8974 6.11087 18.9305 6.29159C18.9637 6.4723 19.046 6.64038 19.1684 6.77738C19.2456 6.86429 19.3227 6.95804 19.3921 7.04593C19.9984 7.80385 20.3177 8.75141 20.294 9.72169C20.2958 9.9813 20.2832 10.2408 20.2564 10.499C20.0361 13.5547 18.5308 14.9629 15.0606 15.3584C14.868 15.3803 14.686 15.4577 14.5366 15.5812C14.3873 15.7047 14.277 15.8689 14.2192 16.0538C14.1614 16.2388 14.1586 16.4366 14.2112 16.6231C14.2637 16.8096 14.3693 16.9769 14.5151 17.1045C14.7638 17.3495 14.9272 17.6679 14.9815 18.0127C15.049 18.2804 15.0801 18.556 15.0737 18.832V21.166C15.064 21.8135 15.064 22.2988 15.064 22.5215C15.064 22.7867 15.1693 23.0411 15.3569 23.2286C15.5444 23.4161 15.7987 23.5215 16.064 23.5215C16.3292 23.5215 16.5835 23.4161 16.7711 23.2286C16.9586 23.0411 17.064 22.7867 17.064 22.5215C17.064 22.3047 17.064 21.8291 17.0737 21.1817V18.832C17.0818 18.3899 17.0297 17.9487 16.9189 17.5205C16.8873 17.38 16.8485 17.2411 16.8027 17.1045C18.324 16.8518 19.7062 16.0675 20.7033 14.8911C21.7005 13.7148 22.2479 12.2228 22.248 10.6807C22.281 10.3621 22.2963 10.042 22.294 9.72169C22.3162 8.34046 21.8712 6.99222 21.0313 5.89551L21.0313 5.89549Z" fill="#4D63B5"/>
                                    </svg>
                                </span>
                                <span className="body-text-p2">{github}</span>
                            </a>
                        </p>
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default Devcard;
