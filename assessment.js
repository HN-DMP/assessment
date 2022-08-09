'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

 userNameInput.onkeydown = event => {
    if (event.key === 'Enter') {
      assessmentButton.onclick();
    }
  };

  assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if (userName.length === 0) {
        return;
  }
    resultDivided.innerText = "";
    
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);

    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    
    tweetDivided.innerText="";
    const anchor=document.createElement('a');
    const hrefValue=
    'https://twitter.com/intent/tweet?button_hashtag='+
    encodeURIComponent('あなたのいいところ')+
    '&ref_src=twsrc%5Etfw';
    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', result);
    anchor.innerText = 'Tweet #あなたのいいところ';

    tweetDivided.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
    tweetDivided.appendChild(script);
  };


 

const answers =[
'{userName}のいいところはシューティングです。{userName}の特徴的なエイムは皆を惹きつけ、心に残ります。',
'{userName}のいいところはヘイト集めです。{userName}を前にしたエネミーは、気になって仕方がないでしょう。',
'{userName}のいいところは迷言です。{userName}の迷言に周りの人は感化されます。',
'{userName}のいいところはスパルタです。{userName}のスパルタがものごとをいつもテルモピュライに導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところはインポスターです。{userName}がする決断にいつも殺される人がいます。',
'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のいいところはカリスマです。{userName}の一挙手一投足に皆が感謝しています。',
'{userName}のいいところはランボーです。サーチアンドデストロイな{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のいいところは課金です。{userName}の課金が推しを救っています。',
'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
'{userName}のいいところは自制心です。死体撃ちや屈伸煽りされたときにしっかりと衝動を抑えられる{userName}が皆から評価されています。'
]

function assessment(userName){
    let sumOfCharCode=0;
    for(let i=0; i<userName.length; i++){
        sumOfCharCode=sumOfCharCode+userName.charCodeAt(i);
    }
    const index= sumOfCharCode%answers.length
    let result=answers[index];
    result = result.replaceAll('{userName}', userName);
    return result;
}

console.assert(
    assessment('太郎') ===
    assessment('太郎'),
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  ); 
