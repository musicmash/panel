<template>
    <div>
        <div class="background-wrapper">
            <div class="background">
                <div class="background-content"></div>
            </div>
            <div class="banner">
                <div class="container">
                    <div class="d-flex justify-content-end mt-3">
                        <div class="row">
                            <div class="col-12">
                                <a
                                    href="#"
                                    class="btn btn-md btn-link"
                                    style="color: white;"
                                    >Login</a
                                >
                                <a
                                    href="#"
                                    class="btn btn-md btn-outline-success"
                                    >Join free</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h1 style="color: white;" class="heading_1">
                                Musicmash
                            </h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h2 style="color: white;">
                                Explore the world's largest catalog of song
                                lyrics and translations
                            </h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <search class="mt-3"></search>
                        </div>
                    </div>
                    <div class="row mt-3 pb-3">
                        <div class="col-12">
                            <p class="text-center" style="line-height: 2.2;">
                                <hashtag
                                    class="mr-3 mt-3"
                                    v-for="(trending, index) in trendings"
                                    :text="trending"
                                    :key="index"
                                ></hashtag>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="releases">
            <div class="container">
                <div class="row pt-3">
                    <div class="col-12">
                        <span class="section-headline section-subheadline"
                            >Music</span
                        >
                    </div>

                    <div class="col-12 d-flex">
                        <span class="section-headline mr-auto"
                            >Latest releases</span
                        >
                    </div>
                    <div class="col-12 mt-2">
                        <div
                            class="d-flex"
                            style="overflow: scroll; height: 350px;"
                        >
                            <release
                                class="mr-2 p-0"
                                v-for="release in releases"
                                :release="release"
                                :text="release"
                                :key="release.id"
                            >
                            </release>
                        </div>
                    </div>

                    <div class="col-12 d-flex">
                        <span class="section-headline mr-auto"
                            >Upcoming releases</span
                        >
                    </div>
                    <div class="col-12 mt-2">
                        <div
                            class="d-flex"
                            style="overflow: scroll; height: 350px;"
                        >
                            <release
                                class="mr-2 p-0"
                                v-for="release in releases"
                                :release="release"
                                :text="release"
                                :key="release.id"
                            >
                            </release>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import search from "@/components/main/search";
import hashtag from "@/components/main/hashtag";
import release from "@/components/release";

export default {
    components: {
        search,
        hashtag,
        release,
    },
    data() {
        return {
            trendings: [
                "Ed Sheeran",
                "Drake",
                "Kendrick Lamar",
                "Avicii",
                "XXXTENTACION",
                "Eminem",
                "Imagine Dragons",
                "The Weeknd",
                "Adele",
                "Rammstein",
                "Marshmello",
                "AC/DC",
                "Skrillex",
                "Green Day",
                "Nirvana",
                "Kanye West",
                "Metallica",
                "Marshmello",
                "The Chainsmokers",
            ],
            releases: [
                {
                    id: 27030425,
                    artist_id: 57463,
                    artist_name: "Attila",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/1b/ff/3b/1bff3baa-c9bc-ff45-7c58-022489646066/0.jpg/500x500bb.jpeg",
                    title: "Canceled",
                    itunes_id: "1512478318",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: true,
                },
                {
                    id: 31355242,
                    artist_id: 68707,
                    artist_name: "Basshunter",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/5f/ce/8e/5fce8e83-0323-47e4-ce4b-dc58a52042ef/195081524665.jpg/500x500bb.jpeg",
                    title: "Angles Ain't Listening",
                    itunes_id: "1512971087",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 30235250,
                    artist_id: 98568,
                    artist_name: "Fatboy Slim",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/51/de/34/51de34e3-e94c-6696-1505-670bf09a009d/cover.jpg/500x500bb.jpeg",
                    title: "All the Ladies (Rebūke Remix)",
                    itunes_id: "1513465129",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 29472744,
                    artist_id: 104775,
                    artist_name: "Boys Noize",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/7b/a2/94/7ba2946d-b0e7-020f-db3e-55e214b043e7/826194512095.jpg/500x500bb.jpeg",
                    title: "Mvinline",
                    itunes_id: "1510975034",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 29473434,
                    artist_id: 154903,
                    artist_name: "Dave Sinner",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/4f/07/fe/4f07fe5c-70c9-abb0-c7bc-2013d1e8d733/4062548012033_3000.jpg/500x500bb.jpeg",
                    title: "Dawn of Life",
                    itunes_id: "1509997906",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 31356837,
                    artist_id: 187602,
                    artist_name: "Dua Lipa",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/bf/f1/8c/bff18cbb-43d1-acbb-8c20-d775fdb0867d/190295211769.jpg/500x500bb.jpeg",
                    title: "Break My Heart (Jax Jones Midnight Snack Remix)",
                    itunes_id: "1513955424",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 31304708,
                    artist_id: 250617,
                    artist_name: "Gucci Mane",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/cb/d4/bf/cbd4bf7f-15ba-81e0-144b-49fe6ec1e239/827577541039.jpg/500x500bb.jpeg",
                    title: "Opposite (feat. Gucci Mane)",
                    itunes_id: "1514666837",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: true,
                },
                {
                    id: 25255231,
                    artist_id: 340636,
                    artist_name: "L-Side",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/16/8a/cb/168acb4c-ead7-ee7e-b198-8e7f043f9547/5060728640372_cover.jpg/500x500bb.jpeg",
                    title: "Steppa Dub (feat. MC Fats)",
                    itunes_id: "1511163396",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 29470237,
                    artist_id: 628075,
                    artist_name: "Tisoki",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/54/1d/18/541d1852-264e-e490-5518-8e111b4fda9b/810012534499.png/500x500bb.jpeg",
                    title: "Promise (The Remixes)",
                    itunes_id: "1512108983",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: true,
                },
                {
                    id: 30588778,
                    artist_id: 641433,
                    artist_name: "Tut Tut Child",
                    released: "2020-05-29T00:00:00Z",
                    poster:
                        "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/a0/b8/59/a0b85934-46bf-5de0-9529-25c49bf879d8/artwork.jpg/500x500bb.jpeg",
                    title: "Too Tired to Sleep (feat. Augustus Ghost)",
                    itunes_id: "1513283507",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 33861600,
                    artist_id: 2216,
                    artist_name: "Bart B More",
                    released: "2020-05-28T00:00:00Z",
                    poster:
                        "https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/5e/9f/40/5e9f40e0-748f-270e-cee9-ccd43ea814d1/8720205128393.png/500x500bb.jpeg",
                    title: "Runaway",
                    itunes_id: "1512173739",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 33865020,
                    artist_id: 438862,
                    artist_name: "Muzzy",
                    released: "2020-05-28T00:00:00Z",
                    poster:
                        "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/b3/3e/33/b33e33be-38f9-d57f-22b6-ab00a01a05c1/703980549490.png/500x500bb.jpeg",
                    title: "Nemesis",
                    itunes_id: "1514524886",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: true,
                },
                {
                    id: 33865098,
                    artist_id: 450443,
                    artist_name: "Nitti Gritti",
                    released: "2020-05-28T00:00:00Z",
                    poster:
                        "https://is4-ssl.mzstatic.com/image/thumb/Music123/v4/27/6f/5c/276f5cd0-4202-8979-d224-de1a2ed0cae8/8720205027573.png/500x500bb.jpeg",
                    title: "Pass Out",
                    itunes_id: "1512381249",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: true,
                },
                {
                    id: 33865358,
                    artist_id: 493141,
                    artist_name: "The Prophet",
                    released: "2020-05-28T00:00:00Z",
                    poster:
                        "https://is3-ssl.mzstatic.com/image/thumb/Music113/v4/3b/ad/70/3bad70cf-2685-6041-b9e5-2c5d470c0d16/8720195691471.png/500x500bb.jpeg",
                    title: "Yrml 2k20 (feat. D. Sonar & JDJ)",
                    itunes_id: "1515129681",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 33865484,
                    artist_id: 512268,
                    artist_name: "RIOT",
                    released: "2020-05-28T00:00:00Z",
                    poster:
                        "https://is4-ssl.mzstatic.com/image/thumb/Music113/v4/df/a0/d9/dfa0d9a5-d7ea-0155-bb92-f3b16246173d/cover.jpg/500x500bb.jpeg",
                    title: "Jackknife",
                    itunes_id: "1509510731",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 33673152,
                    artist_id: 62363,
                    artist_name: "Baauer",
                    released: "2020-05-27T00:00:00Z",
                    poster:
                        "https://is2-ssl.mzstatic.com/image/thumb/Video123/v4/84/7d/16/847d16ad-e3b9-c88b-692f-3fc9ffd8509f/TN1.jpg/3840x1554bb.jpeg",
                    title: "Reachupdontstop",
                    itunes_id: "1515476619",
                    spotify_id: "",
                    deezer_id: "",
                    type: "music-video",
                    explicit: false,
                },
                {
                    id: 33157948,
                    artist_id: 315357,
                    artist_name: "Julia Michaels",
                    released: "2020-05-26T00:00:00Z",
                    poster:
                        "https://is5-ssl.mzstatic.com/image/thumb/Video113/v4/d5/52/c8/d552c8de-2e0e-eb1c-901e-0902f0953dd2/20UMGIM39529.crop.jpg/1912x1072bb.jpeg",
                    title: "Give It To You (from Songland)",
                    itunes_id: "1512489374",
                    spotify_id: "",
                    deezer_id: "",
                    type: "music-video",
                    explicit: false,
                },
                {
                    id: 32724624,
                    artist_id: 453183,
                    artist_name: "Nothing But Thieves",
                    released: "2020-05-26T00:00:00Z",
                    poster:
                        "https://is4-ssl.mzstatic.com/image/thumb/Video123/v4/f5/78/a2/f578a22d-648c-12f6-76ff-92e852a150fd/8864473167330101VIC.jpg/1920x1072bb.jpeg",
                    title: "I'm Not Made by Design (Live in Hamburg)",
                    itunes_id: "1514645796",
                    spotify_id: "",
                    deezer_id: "",
                    type: "music-video",
                    explicit: true,
                },
                {
                    id: 33349492,
                    artist_id: 481308,
                    artist_name: "Twenty One Pilots",
                    released: "2020-05-26T00:00:00Z",
                    poster:
                        "https://is5-ssl.mzstatic.com/image/thumb/Music123/v4/ce/e6/90/cee6906c-e400-96c7-baa7-a93a9ea098c1/075679812025.jpg/500x500bb.jpeg",
                    title: "Level of Concern (live from outside)",
                    itunes_id: "1515289318",
                    spotify_id: "",
                    deezer_id: "",
                    type: "album",
                    explicit: false,
                },
                {
                    id: 31717492,
                    artist_id: 453183,
                    artist_name: "Nothing But Thieves",
                    released: "2020-05-24T00:00:00Z",
                    poster:
                        "https://is5-ssl.mzstatic.com/image/thumb/Video113/v4/46/2d/0f/462d0f49-f4fa-34d1-a1c4-2c8e439a0571/8864485100790101.jpg/1920x1080bb.jpeg",
                    title: "In Solitude :: Particles (Live)",
                    itunes_id: "1514672016",
                    spotify_id: "",
                    deezer_id: "",
                    type: "music-video",
                    explicit: false,
                },
            ],
        };
    },
};
</script>

<style scoped>
.background-wrapper {
    width: 100%;
    overflow: hidden;
}
.background {
    width: 100%;
    height: 700px;
}
.background-content {
    width: 100%;
    height: calc(100% + 25vw + 71rem);
    z-index: -1;
    background: url(../assets/images/albums.jpg) 0 0 repeat;
    will-change: transform;
    -webkit-animation: slide 40s linear infinite;
    animation: slide 40s linear infinite;
}

@-webkit-keyframes slide {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(0, -71rem, 0);
        transform: translate3d(0, -71rem, 0);
    }
}
@keyframes slide {
    0% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
    }
    to {
        -webkit-transform: translate3d(0, -71rem, 0);
        transform: translate3d(0, -71rem, 0);
    }
}

.banner {
    margin-top: -700px;
}

.releases {
    background-color: #f8f9fa;
}

.section-headline {
    font-size: 32px;
    line-height: 1.0625;
    font-weight: 600;
    letter-spacing: -0.009em;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
        "Arial", sans-serif;

    font-weight: 550;
    line-height: 1.2;
}

.section-subheadline {
    color: #cfcfcf;
}
</style>
