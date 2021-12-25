const CONFIG = {
  APIWILAYAH2: (kelurahan) => `https://jakpintasdev.dpmptsp-dki.com:3000/wilayah/${kelurahan}`,
  APIPOI: () => `https://jakpintasdev.dpmptsp-dki.com:3000/lon/${lon}/lat/${lat}/rad/${rad}`,
  CACHE_NAME: 'JakPintas-V1',
}

export default CONFIG;