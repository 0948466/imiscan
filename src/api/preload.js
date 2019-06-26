import StartBG from '../assets/img/bg/start-bg.png';
import Feet03 from '../assets/img/feet/03-sc-feet.png';
import ScannerFindQRCode from '../assets/img/scanner/find-qr-code.png';
import ScannerGetConnected from '../assets/img/scanner/get-connected.png';
import ScannerPrepare from '../assets/img/scanner/prepare.png';

function preload(...images) {
  images.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
}

function preloadInit() {
  window.addEventListener('load', () => {
    preload(
      StartBG,
      Feet03,
      ScannerFindQRCode,
      ScannerGetConnected,
      ScannerPrepare,
    );
  });
}

export default preloadInit;
