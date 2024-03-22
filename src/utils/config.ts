// config.ts
interface EnvironmentConfig {
    mode: string;
    basePath: (path: string) => string;
    username?: string;
    // Diğer konfigürasyonları ekleyin...
}
const environment = process.env.NODE_ENV || 'dev'; // Default olarak 'dev' kullanılacaktır
console.log('environment', environment);
const config: Record<string, EnvironmentConfig> = {
    development: {
        mode: 'test',
        basePath: function (path: string) {
                return  'http://'+this.mode  + path + '.meanderservices.com';
        }
        // Diğer dev konfigürasyonları...
    },
    production: {
        mode: 'prod',
        basePath: function (path: string) {
                return 'http://' + path + '.meanderservices.com';
        }
        // Diğer prod konfigürasyonları...
    }
    // test: {
    //     // Test konfigürasyonları...
    // }
    // İhtiyaç duyulan diğer ortamları ekleyin...
};
const envConfig: EnvironmentConfig = config[environment];
export default envConfig;