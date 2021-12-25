import CONFIG from "../globals/config";

const JakPintasSource = {
  async getKelurahan(kelurahan) {
    const response = await fetch(CONFIG.APIWILAYAH2(kelurahan));
    const responseJson = await response.json();
    return responseJson.features[0];
  }
}

export default JakPintasSource;