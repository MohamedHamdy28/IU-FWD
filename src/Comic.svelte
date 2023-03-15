<script lang="ts">
  import type { ComicData } from "./comic";

  const email = "m.abdelhamid@innopolis.university";

  async function displaycomic(email: string) {
    const emailParam: URLSearchParams = new URLSearchParams();
    emailParam.append("email", email);

    const comicIdResponse: Response = await fetch(
      "https://fwd.innopolis.app/api/hw2?" + emailParam.toString()
    );
    const comicId: number = await comicIdResponse.json();

    const comicIdParam: URLSearchParams = new URLSearchParams();
    comicIdParam.append("num", comicId.toString());

    const comicDataResponse: Response = await fetch(
      "https://getxkcd.vercel.app/api/comic?" + comicIdParam.toString()
    );
    const data: ComicData = await comicDataResponse.json();
    const { alt, day, img, month, title, year } = data;
    const date: Date = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );
    const date_message: string =
      "This image was uploaded on " + date.toLocaleDateString();
    return { img, alt, title, date_message };
  }
</script>

<div class="comic">
  {#await displaycomic(email)}
    <p>Loading...</p>
  {:then comic_data}
    <h3 id="img-title">{comic_data.title}</h3>
    <img id="img" src={comic_data.img} alt="a comic should be here" />
    <p id="date">{comic_data.date_message}</p>
  {/await}
</div>

<style>
  .comic {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
