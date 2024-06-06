// globalHelper.ts dosyası
import type { AxiosResponse } from 'axios'
import envConfig from './config'
import api from './axios'
import axios from 'axios'

//STORES
import { useLanguageStore } from '@/stores/language'
const uid = () => {
     return Math.random().toString(36).substr(2, 9)
}

const parse = (string: string) => {
     return JSON.parse(string.replace(/\\/g, ''))
}

const beforeSubmitData = function (data: { [key: string]: string }, formatDate: string[]) {
     formatDate.filter(function (a) {
          if (data[a]) {
               const dateArr = data[a].split('.')
               let year = ''
               let hour = ''
               if (dateArr[2]) {
                    if (dateArr[2].includes(' ')) {
                         year = dateArr[2].split(' ')[0]
                         hour = 'T' + dateArr[2].split(' ')[1]
                    } else {
                         year = dateArr[2]
                    }
                    data[a] = year + '-' + dateArr[1] + '-' + dateArr[0] + hour
               } else {
                    // data[a] = dateArr
               }
          }
     })

     return data
}

const getApi = async <T>(applicationName: string, controllerName: string, name: string, params: Record<string, any> | null = null, dontUseGet = false, formatDate: string[] = [], baseURLLink = false): Promise<AxiosResponse<T>> => {
     try {
          if (params !== null && formatDate.length > 0) {
               params = beforeSubmitData(params, formatDate)
          }

          // if(stored.getUser){
          //      api.defaults.headers.common.Member = stored.getUser
          // }    const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage') || '{}')
          const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage') || '{}')
          const languageName = selectedLanguage.code || ''

          api.defaults.headers.common.Authorization = localStorage.getItem('Token')
          api.defaults.headers.common.CorrelationID = uid()
          api.defaults.headers.common.ClientIP = localStorage.getItem('ClientIP') || ''
          api.defaults.headers.common.ApiKey = envConfig.apiKey || ''
          api.defaults.headers.common.SaleChannelName = envConfig.SaleChannelName || ''
          if (localStorage.getItem('SubSalechannelname')) {
               api.defaults.headers.common.SubSalechannelname = localStorage.getItem('SubSalechannelname') || ''
          }
          api.defaults.headers.common.LanguageID = languageName || ''

          const actionName = dontUseGet ? '/' + name : '/Get' + name
          const mainUrl = baseURLLink ? 'http://' + applicationName : envConfig.basePath(applicationName)

          const response = await api.get<T>(controllerName + actionName, {
               params,
               baseURL: mainUrl
          })

          return response
     } catch (error: any) {
          if (error && error.Status === 4) {
               console.error(error)
          }

          throw error // Hata tekrar fırlatılır
     }
}

const getQueryApi = async <T>(applicationName: string, controllerName: string, name: string, params: Record<string, any> | null = null, dontUseGet = false, formatDate: string[] = [], baseURLLink = false): Promise<AxiosResponse<T>> => {
     try {
          if (params !== null && formatDate.length > 0) {
               params = beforeSubmitData(params, formatDate)
          }

          const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage') || '{}')
          const languageName = selectedLanguage.code || ''

          api.defaults.headers.common.Authorization = localStorage.getItem('Token')
          api.defaults.headers.common.CorrelationID = uid()
          api.defaults.headers.common.ClientIP = localStorage.getItem('ClientIP') || ''
          // api.defaults.headers.common.GlobalCompanyID = 'ProtalyaOfisTest'
          api.defaults.headers.common.ApiKey = envConfig.apiKey || ''
          api.defaults.headers.common.SaleChannelName = envConfig.SaleChannelName || ''
          if (localStorage.getItem('SubSalechannelname')) {
               api.defaults.headers.common.SubSalechannelname = localStorage.getItem('SubSalechannelname') || ''
          }
          api.defaults.headers.common.LanguageID = languageName || ''

          const actionName = dontUseGet ? '/' + name : '/' + name
          const mainUrl = baseURLLink ? 'http://' + applicationName : envConfig.basePath(applicationName)

          const response = await api.get<T>(controllerName + actionName, {
               params,
               baseURL: mainUrl
          })

          return response
     } catch (error: any) {
          if (error && error.Status === 4) {
               console.error(error)
          }

          throw error // Hata tekrar fırlatılır
     }
}

const callPostApi = async (applicationName: string, controllerName: string, name: string, data: Record<string, any> | null = null, formatDate: string[] = [], dontGoTable = false, manuelURL = false, baseURLLink = false): Promise<AxiosResponse<any> | false> => {
     // Assuming beforeSubmitData is defined elsewhere
     // if (formatDate.length > 0) {
     //     data = beforeSubmitData(data, formatDate);
     // }

     let mainUrl = ''
     if (manuelURL) {
          mainUrl = 'http://' + envConfig.mode + '.' + applicationName
     }
     // else if (baseURLLink) {
     //     mainUrl = 'http://' + envConfig.applicationId;
     // }
     else {
          mainUrl = envConfig.basePath(applicationName)
     }

     const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage') || '{}')
     const languageName = selectedLanguage.code || ''

     api.defaults.headers.common.Authorization = localStorage.getItem('Token')
     api.defaults.headers.common.CorrelationID = uid()
     api.defaults.headers.common.ClientIP = localStorage.getItem('ClientIP') || ''
     // api.defaults.headers.common.GlobalCompanyID = 'ProtalyaOfisTest'
     api.defaults.headers.common.ApiKey = envConfig.apiKey || ''
     api.defaults.headers.common.SaleChannelName = envConfig.SaleChannelName || ''
     if (localStorage.getItem('SubSalechannelname')) {
          api.defaults.headers.common.SubSalechannelname = localStorage.getItem('SubSalechannelname') || ''
     }
     api.defaults.headers.common.LanguageID = languageName || ''

     try {
          const response = await api.post(controllerName + '/' + name, data, { baseURL: mainUrl })
          console.log(response, 'response')
          if (response.data.status === 1) {
               if (!dontGoTable) {
                    return response
                    // Assuming getApi is defined elsewhere
                    // await getTable(applicationName, controllerName, name, null, false, [], baseURLLink);
               }
               return response
          } else if (response.data.status === 2) {
               console.error(response.data.errorMessage)
               return false
          } else if (response.data.status === 3) {
               response.data.validationErrorList.forEach(function (a: any) {
                    console.log(`${a.propertyName} ${a.errorDescription}`)
               })
               return false
          } else if (response.data.status === 5) {
               return response
          }
     } catch (error: any) {
          if (error && error.Status === 4) {
               console.log('Lütfen Oturum Açın')
          }

          throw error // Hata tekrar fırlatılır
     }

     return false // In case no condition is met, for example, if the response status is not handled.
}

const checkEmptyValue = function (fields: any, status: boolean): boolean {
     if (fields === null && status === true) {
          return true
          //return getLabel('PleaseSelect', 'Common')
     }
     return false // Eğer yukarıdaki koşul sağlanmazsa false döndür
}
const checkDate = function (val: string): string {
     if (!val) {
          return getLabel('InvalidDate', 'Common')
     }

     const dateArr: string[] = val.split('.')
     // const Year = new Date()

     if (parseInt(dateArr[0]) > 31 || dateArr[0] === '00' || dateArr[1] === '00' || parseInt(dateArr[1]) > 12) {
          return getLabel('InvalidDate', 'Common')
     }

     // Return type should be specified based on your getLabel function's return type
     return '' // Adjust the return statement accordingly
}

const checkDateAndTime = function (val: string): string {
     if (!val) {
          return getLabel('InvalidDate', 'Common')
     } else {
          // Do nothing with the else block, it's empty in the original code
     }

     const dateTime: string[] = val.split(' ')
     const dateArr: string[] = dateTime[0].split('.')

     if (parseInt(dateArr[0]) > 31 || dateArr[0] === '00' || dateArr[1] === '00' || parseInt(dateArr[1]) > 12) {
          return getLabel('InvalidDate', 'Common')
     }

     if (dateTime[1]) {
          const times: string[] = dateTime[1].split(':')
          if (times[0].length === 2 && times[1].length === 2) {
               // true
          } else {
               return getLabel('InvalidTime', 'Common')
          }
     } else {
          return getLabel('InvalidTime', 'Common')
     }

     // Return type should be specified based on your getLabel function's return type
     return '' // Adjust the return statement accordingly
}
const convertDate = function (localDate: string, separate: string = '.', format: string = '/'): string {
     // if (localDate == null) {
     //  localDate = date.formatDate(new Date(), 'DD.MM.YYYY')
     // }

     if (localDate) {
          const dateArr: string[] = localDate.split(separate)
          let year: string = ''
          let hour: string = ''

          if (dateArr[2] && dateArr[2].includes(' ')) {
               year = dateArr[2].split(' ')[0]
               hour = ' ' + dateArr[2].split(' ')[1]
          } else {
               year = dateArr[2]
          }

          return year + format + dateArr[1] + format + dateArr[0] + hour
     }

     // Return type should be specified based on the expected return type
     return '' // Adjust the return statement accordingly
}
const getLabel = function (inputName: string, parentName: string | null = null): string {
     let Text: string = inputName

     if (parentName !== null) {
          const parentLanguage: Array<any> = []
          const translationList = JSON.parse(localStorage.getItem('translationList') || '[]')
          translationList.filter(function (a: any) {
               if (a.ParentName === parentName) {
                    parentLanguage.push(a)
               }
          })

          parentLanguage.filter(function (a: any) {
               if (a.Name === inputName) {
                    Text = a.Text
               }
          })
     } else {
          // Text = useLanguages().getTextByName(inputName) || inputName;
     }

     return Text
}

//eslint-disable-next-line
const dateTimeRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).(\d+)([\+\-]\d{2}):(\d{2})$/
const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/

// Tarihi biçimlendiren yardımcı fonksiyon
function formatDate(item: string) {
     const matchArray = item.match(dateTimeRegex)
     if (matchArray) {
          // Eğer tarih ve saat formatı uyuyorsa, tarihi dd.mm.yyyy HH:MM:SS şekline dönüştür
          const day = matchArray[3]
          const month = matchArray[2]
          const year = matchArray[1]
          const hour = matchArray[4]
          const minute = matchArray[5]
          const second = matchArray[6]

          // Biçimlendirilmiş tarih ve saat değerini döndür
          return `${day}.${month}.${year} ${hour}:${minute}:${second}`
     } else if (dateRegex.test(item)) {
          // Eğer sadece tarih formatı uyuyorsa, tarihi dd.mm.yyyy şekline dönüştür
          const dateParts = item.split('T')[0].split('-')
          const day = dateParts[2]
          const month = dateParts[1]
          const year = dateParts[0]

          // Biçimlendirilmiş tarih değerini döndür
          return `${day}.${month}.${year}`
     } else {
          // Eğer hiçbiri uymuyorsa, orijinal değeri döndür
          return item
     }
}

// Test
console.log(formatDate('2024-02-13T00:00:00Z')) // Sadece tarih
console.log(formatDate('2024-02-13T10:20:30.123+03:00')) // Tarih ve saat

//STRAPI API TEST
const API_BASE_URL = import.meta.env.VITE_STRAPI_URL
const saleChannel = import.meta.env.VITE_SALE_CHANNEL
// Bearer Token'ınızı buraya ekleyin
const BEARER_TOKEN = import.meta.env.VITE_STRAPI_TOKEN
const fetchData = (endpoint: string, locale: string, filters: Record<string, string>) => {
     try {
          const filterParams = Object.entries(filters)
               .map(([key, value]) => `filters[${key}][$eq]=${value}`)
               .join('&')
          const url = `${API_BASE_URL}/${endpoint}?populate=deep&${filterParams}&filters[saleChannel][$eq]=${saleChannel}&locale=${locale}`
          return axios
               .get(url, {
                    headers: {
                         Authorization: `Bearer ${BEARER_TOKEN}`
                    }
               })
               .then((response: AxiosResponse) => {
                    return response.data
               })
               .catch((error) => {
                    console.error('Hata:', error)
                    return null
               })
     } catch (error) {
          console.error('Hata:', error)
          return null
     }
}

// const postData =  (endpoint: string, data: any) => {
//   try {
//     const response: AxiosResponse =  axios.post(`${API_BASE_URL}/${endpoint}`, data, {
//       headers: {
//         Authorization: `Bearer ${BEARER_TOKEN}`
//       }
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Hata:', error);
//     return null;
//   }
// }

// const postData = async (endpoint: string, data: any): Promise<AxiosResponse<any, any>> => {
//     try {
//       // Use await to wait for the Promise to resolve and get the actual AxiosResponse
//       const response: AxiosResponse<any, any> = await axios.post(`${envConfig.API_BASE_URL}/${endpoint}`, data, {
//         headers: {
//           Authorization: `Bearer ${.BEARER_TOKEN}`
//         }
//       });
//       return response; // If you want the whole AxiosResponse object
//       // return response.data; // If you only want the data from the AxiosResponse
//     } catch (error) {
//       console.error('Hata:', error);
//       return null;
//     }
//   }

const groupByLocale = (data: any[]) => {
     const locales: { [key: string]: any[] } = {}

     data.forEach((item: any) => {
          const locale = item.locale

          if (!locales[locale]) {
               locales[locale] = []
          }

          locales[locale].push(item)
     })

     return locales
}

const getImage = (url: any) => {
     const API_IMG_URL = import.meta.env.VITE_STRAPI_IMG_URL
     const src = `${API_IMG_URL}${url}`
     // console.log(src)
     return src
}

const getLang = () => {
     try {
          const url = `${API_BASE_URL}/i18n/locales`
          return axios
               .get(url, {
                    headers: {
                         Authorization: `Bearer ${BEARER_TOKEN}`
                    }
               })
               .then((response: AxiosResponse) => {
                    // console.log(response.data,"language");
                    useLanguageStore().setAllLanguage(response.data)
                    return response.data
               })
               .catch((error) => {
                    console.error('Hata:', error)
                    return null
               })
     } catch (error) {
          console.error('Hata:', error)
          return null
     }
}
getLang()

export {
     getApi,
     callPostApi,
     getImage,
     parse,
     checkEmptyValue,
     checkDate,
     checkDateAndTime,
     convertDate,
     getLabel,
     getLang,
     formatDate,
     fetchData,
     // postData,
     groupByLocale,
     getQueryApi
}
