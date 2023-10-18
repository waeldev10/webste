let share = document.getElementById("share"),
    copy = document.getElementById("copy"),
    text = document.getElementById("text");
    result = document.getElementById("result"),
    clear = document.getElementById("clear"),
    dark = document.getElementById("dark"),
    mybody = document.getElementById("mybody"),
    h6 = document.getElementById("h6"),
    title = document.getElementById("title"),
    display = document.getElementById("display"),
    content = document.getElementById("content"),
    h1 = document.getElementById("h1");
    w  = document.getElementById("w");
    p  = document.getElementById("p");
    alertBox  = document.getElementById("alertBox");
    check = document.getElementById("check"),
    moon = document.getElementById("moon"),
    sun = document.getElementById("sun"),
    show = document.getElementById("show");

//dark mode
let isDark = false;
dark.onclick = function(){

  isDark = !isDark;

  if(isDark){
    
    mybody.style.background = "#3e3e42";
    dark.style.background = "rgba(255, 255, 255, 0.3)";
    clear.style.background = "#3e3e42";
    share.style.background = "#3e3e42";
    copy.style.background = "#3e3e42";
    content.style.background = "rgba(255, 255, 255, 0.3";
    display.style.background = "rgba(255, 255, 255, 0.3";
    title.style.background = "rgba(255, 255, 255, 0.3";
    content.style.borderBottom = "5px solid rgba(255, 255, 255, 0.7)";
    display.style.borderBottom = "5px solid rgba(255, 255, 255, 0.7)";
    title.style.borderBottom = "5px solid rgba(255, 255, 255, 0.7)";
    h6.style.color = "rgba(255, 255, 255, 0.7)";
    h1.style.color = "rgba(255, 255, 255, 0.8)";
    w.style.color = "rgba(255, 255, 255, 0.8)";
    text.style.background = "rgba(255, 255, 255, 0.6)";
    alertBox.style.background = "#3e3e42";
    alertBox.style.borderBottom = "5px solid rgba(255, 255, 255, 0.7)";
    p.style.color = "rgba(255, 255, 255, 0.8)";
    sun.style.display = "block";
    moon.style.display = "none";

  }else{
    
    dark.style.background = "rgba(0, 0, 0, 0.3)";
    mybody.style.background = "rgb(237, 237, 237)";
    clear.style.background = "rgb(25, 104, 25)";
    share.style.background = "rgb(25, 104, 25)";
    copy.style.background = "rgb(25, 104, 25)";
    content.style.background = "#ffffff";
    display.style.background = "#ffffff";
    title.style.background = "#ffffff";
    content.style.borderBottom = "5px solid rgb(0, 128, 0,.5)";
    display.style.borderBottom = "5px solid rgb(0, 128, 0,.5)";
    title.style.borderBottom = "5px solid rgb(0, 128, 0,.5)";
    h6.style.color = "rgb(25, 104, 25)";
    h1.style.color = "rgb(25, 104, 25)";
    w.style.color = "#111111";
    text.style.background = "rgb(237, 237, 237)";
    alertBox.style.background = "#ffffff";
    alertBox.style.borderBottom = "5px solid rgb(0, 128, 0,.5)";
    p.style.color = "#111111";
    sun.style.display = "none";
    moon.style.display = "block";

  }

}

//enode
function updateDiv(){

    const sentence = text.value;

    const replacements = {
      "غزة": ["غــzـــه", "Gaــزة", "5azah"],
      "غزه": ["غــzـــه", "Gaــزه", "5azah"],
      "اسرائيل": ["ا_s_رائيل", "اسrاىيل", "اسراeeل"],
      "إسرائيل": ["ا_s_رائيل", "اسrاىيل", "اسراeeل"],
      "فلسطين": ["fلسطين", "ف_l_سطين", "9lsteen"],
      "الكيان": ["ال,k,يان", "الك_y_ان", "12kyan"],
      "كيان": ["ال,k,يان", "الك_y_ان", "12kyan"],
      "الصهيوني": ["ال_s_هيوني", "al_صهيوني", "الص,H,يوني"],
      "صهيون": ["صHيون", "SHيون", "صهuen"],
      "صهيوني": ["صHيوني", "SHيوني", "صهueni"],
      "حماس": ["H_ماس", "ح,م,اس", "9mas"],
      "حركة": ["ح_r_كه","H,ركــه","4rakat"],
      "حركه": ["ح_r_كه","H,ركــه","4rakat"],
      "القسام": ["ال,Q,سام", "AL_ق_s_ام", "1lqsam"],
      "قسام": ["ق_s_ام", "Q<سام", "6sam"],
      "كتائب": ["ك_t_ائب","K_تائب","kta_ىب"],
      "جيش": ["Gيش","ج,y,ش","5yش"],
      "الجيش": ["ال(G)يش","AL_ج,y,ش","ال4ي_sH"],
      "القدس": ["AL,قدس", "ال_Q_دس", "ال_Qods"],
      "قدس": ["Qدس","r_D_س","0ods"],
      "المحتل": ["AL_محتل","الMحتل","AL0Mohtl"],
      "محتل": ["Moحتل","م_H_تل","5ohتل"],
      "الغاصب": ["الغاSb","AL,غاصب","12gaseb"],
      "امريكا": ["ا_M_ريكا","A,مريكا","1_Mreca"],
      "أمريكا": ["ا_M_ريكا","A,مريكا","1_Mreca"],
      "العدو": ["ال,a,دو","AL_عدو","17Ado"],
      "عدو": ["ع_D_و","عدO","4Ado"],
      "اليهود": ["الYهود","AL_يهود","13yhood"],
      "يهود": ["ي_H_ود","Y,هود","2Hood"],
      "مارك": ["Mارك","ماRك","5Ark"],
      "بايدن": ["باYدن","B_ايدن","8baدن"],
      "نتنياهو": ["نتنyاهو","نتن_ياهو","NetnYاهو"],
      "القبة": ["ال_قBه","AL,قبه","12Qobah"],
      "الحديدية": ["ال_H_ديديه","AL_حديديه","23Hadedyah"],
      "القبه": ["ال_قBه","AL,قبه","12Qobah"],
      "قبه": ["Qبه","ق_B_ه","9Obah"],
      "حديديه": ["حدYديديه","H_ديديه","H1dedyah"],
      "الحديديه": ["ال_H_ديديه","AL_حديديه","23Hadedyah"],
      "تل ابيب": ["تل ا_B_يب","Tل Aبيب","ت_L ابيب"],
      "تل أبيب": ["تل ا_B_يب","Tل Aبيب","ت_L ابيب"],
      "ابوعبيده": ["ابو Oبيده","Abo ع_B_يده","1bo O_بيده"],
      "أبوعبيده": ["ابو Oبيده","Abo ع_B_يده","1bo O_بيده"],
    };

    let conversions = {"ة": "ه","ز": "ر","ب": "ٮ","ي": "ٮ","ت": "ٮ","ث": "ٮ","ن": "ں", "ف":"ڡ" , "ق" : "ڡ" , "ج" : "ح" , "خ":"ح","ش":"س"};

    let replacedSentence = sentence;

    Object.keys(replacements).forEach((key) => {
      replacedSentence = replacedSentence.replace(key, replacements[key][Math.floor(Math.random() * replacements[key].length)]);
    });

    if(check.checked){
   
      let regex = new RegExp(Object.keys(conversions).join('|'), 'g');

      myText = replacedSentence.replace(regex, function(match) {
          return conversions[match];
      });

      result.innerText = myText;

    }else{
      result.innerText = replacedSentence;
    }

}

//copy text
function copyText() {
  let text = document.getElementById("result").innerText;
  let tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  if(text == ""){
    document.getElementById("alertBox").style.display = "block";
    document.getElementById("p").innerText = "لايوجد اي نص لنسخه";
    document.getElementById("body").style.display = "block";
  }else{
    document.getElementById("alertBox").style.display = "block";
    document.getElementById("p").innerText = "تم نسخ النص بنجاح";
    document.getElementById("body").style.display = "block";
  }
  
}

function hideAlert() {
  document.getElementById("alertBox").style.display = "none";
  document.getElementById("body").style.display = "none";
}

function clearText(){
  text.value = "";
  result.innerText = "";
} 

function shareToFacebook() {
  var textToShare = document.getElementById("result").innerText;
  // var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(textToShare);
  var url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(textToShare);
  window.open(url, "_blank");
}


