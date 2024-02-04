<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[145px] bg-slate-200 flex flex-col justify-center items-center">
            <div class="relative w-full lg:px-28 md:px-16 sm:px-8">
                <h1 class="text-black text-4xl font-medium font-display tracking-wide my-auto flex items-center">
                    {{ pageTitle }}
                </h1>
            </div>
        </div>
        <div class="w-full mb-44">
            <div
                class="w-full max-w-[975px] text-black text-lg font-normal  leading-loose mt-12 mb-20 2xl:ml-28 xl:ml-28 lg:ml-28 md:ml-16 sm:ml-8">
                {{ privacyPolicyContent }}
            </div>
            <div>
                <h1
                    class="w-full max-w-[975px] text-black text-lg font-semibold  leading-loose mb-10 2xl:ml-28 xl:ml-28 lg:ml-28 md:ml-16 sm:ml-8">
                    {{ sectionTitle }}
                </h1>
                <h2
                    class="w-full max-w-[975px] text-black text-lg font-normal  leading-loose 2xl:ml-28 xl:ml-28 lg:ml-28 md:ml-16 sm:ml-8">
                    {{ sectionContent }}
                </h2>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const pageTitle = ref('Gizlilik Politikası');

const privacyPolicyContent = ref(
    "Bu web sitesini ziyaret etmeniz ve bu site vasıtasıyla sunduğumuz hizmetlerden yararlanmanız sırasında size ve talep ettiğiniz hizmetlere ilişkin olarak elde ettiğimiz bilgilerin ne şekilde kullanılacağı ve korunacağı işbu “Gizlilik Politikası”nda belirtilen şartlara tabidir. Bu web sitesini ziyaret etmekle ve bu site vasıtasıyla sunduğumuz hizmetlerden yararlanmayı talep etmekle işbu “Gizlilik Politikası”nda belirtilen şartları kabul etmektesiniz."
);

const sectionTitle = ref('Bilgilerin Kullanılması ve Korunması');

const sectionContent = ref(
    "Meander Turizm Deniz Taş. Tic. Ve San. A.Ş. müşterilerine daha iyi hizmet verebilmek amacıyla bazı kişisel bilgilerinizi (isim, soy isim, yaş, e-posta, telefon vb…) sizlerden talep etmektedir.\n\nToplanan bu kişisel bilgilerden elde edilebilecek istatistik veriler (tarayıcı tipi, coğrafi konum, yaş, cinsiyet, v.b.), dönemsel kampanya çalışmaları, e-bülten çalışmaları, müşteri profillerine yönelik özel promosyon faaliyetlerinin kurgulanması ve istenmeyen e-postaların iletilmemesine yönelik müşteri “sınıflandırma” çalışmalarında Meander Turizm Deniz Taş. Tic. Ve San. A.Ş. bünyesinde kullanılmaktadır.\n\nMeander Turizm Deniz Taş. Tic. Ve San. A.Ş. üyelik formlarından topladığı bilgileri, söz konusu üyenin haberi ya da aksi bir talimatı olmaksızın, üçüncü şahıslarla kesinlikle paylaşmamakta, faaliyet dışı hiçbir nedenle ticari amaçla kullanmamakta ve de satmamaktadır.\n\nMeander Turizm Deniz Taş. Tic. Ve San. A.Ş., e-posta adresleri ve üyelik formlarında istediği kişisel bilgilerin haricinde site kullanımı sırasında izlediği, ziyaretçi hareket ve tercihlerini analiz ederek yorumlamaktadır. Kişisel bilgiler içermeyen bu istatistiksel veriler, misafirlere daha özel ve etkin bir rezervasyon deneyimi yaşatmak amacıyla kullanılmaktadır.\n\nMeander Travel (samosaferibot.com) e-bülten listesinden ayrılmak istiyorsanız, e-bültenin en alt bölümünde bulunan “bu bülteni bir daha almak istemiyorsanız buraya tıklayınız.” linkine tıklayabilirsiniz.\nMüşteri bilgileri, ancak resmi makamlarca usulü dairesinde bu bilgilerin talep edilmesi halinde ve yürürlükteki emredici mevzuat hükümleri gereğince resmi makamlara açıklama yapmak zorunda olduğu durumlarda resmi makamlara açıklanabilecektir.\n\nMüşterinin sisteme girdiği tüm bilgilere sadece Müşteri ulaşabilmekte ve bu bilgileri sadece Müşteri değiştirebilmektedir. Bir başkasının bu bilgilere ulaşması ve bunları değiştirmesi mümkün değildir.\n\nÖdeme sayfasında istenen kredi kartı bilgileriniz, siteden alışveriş yapan misafirlerimizin güvenliğini en üst seviyede tutmak amacıyla 3D Secure uygulaması ile alınmaktadır. Bu şekilde ödemeye yönelik tüm işlemlerin samosaferibot.com ara yüzü üzerinden banka ve bilgisayarınız arasında gerçekleşmesi sağlanmaktadır. Ancak buna rağmen güvenlik ile ilgili konularda bir garanti verememektedir. İnternetin yapısı gereği bilgiler internet üzerinde yeterli güvenlik önlemleri olmasına rağmen dolaşabilir ve yetkili olmayan kişiler tarafından alınıp kullanılabilir. Bu kullanım ve kullanımdan doğacak zarar Meander Turizm Deniz Taş. Tic. Ve San. A.Ş. sorumluluğunda değildir.\n\nToplanan bilgiler genel kullanıma açık olmayan güvenli bir ortamda saklanır."
);
</script>
  
<style scoped></style>
  