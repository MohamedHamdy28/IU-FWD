interface ComicData{
    alt: string;
    day: string;
    img: string;
    month: string;
    title: string;
    year: string;
}



async function displaycomic(email:string, img_tag: HTMLImageElement, img_title: HTMLHeadElement, date_tag: HTMLParagraphElement){
    const params1: URLSearchParams = new URLSearchParams();
    params1.append('email', email)

    const response1: Response = await fetch('https://fwd.innopolis.app/api/hw2?' + params1.toString());
    const comicId: number = await response1.json();

    const params2: URLSearchParams = new URLSearchParams();
    params2.append('num', comicId.toString())

    const response2: Response = await fetch('https://getxkcd.vercel.app/api/comic?' + params2.toString())
    const data: ComicData = await response2.json()
    const {alt, day, img, month, title, year} = data
    img_tag.src = img;  
    img_tag.alt = alt;
    img_title.textContent = title;
    const date: Date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    date_tag.textContent = 'This image was uploaded on ' + date.toLocaleDateString();
}

const email:string = 'm.abdelhamid@innopolis.university'
const img_tag = document.getElementById('img') as HTMLImageElement
const img_title = document.getElementById('img-title') as HTMLHeadElement
const date_tag = document.getElementById('date') as HTMLParagraphElement

displaycomic(email, img_tag, img_title, date_tag)