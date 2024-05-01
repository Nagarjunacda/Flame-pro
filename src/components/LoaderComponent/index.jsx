import HeaderBannerSlim from "../ContentBlocks/HeaderBannerSlim";

function LoaderComponent() {
    const trayData = { image: '', speak_to_us_button: 'Shop All', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', title: 'Shop' }
    return <HeaderBannerSlim trayData={trayData} />
}
export default LoaderComponent