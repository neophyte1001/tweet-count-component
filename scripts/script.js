let box = document.querySelector('.tweet_box')
let tweetCount = document.querySelector('.tweet_count')
let btnSend = document.querySelector('.send');
let btnBack = document.querySelector('.back');
let sendPage = document.querySelector('.tweet_send');
let tweetPage = document.querySelector('.tweet_wrap');
let error = document.querySelector('.error_msg');
let tweetMax = 280

//This will ensure that only 140 characters are in the text_box.
// even if you copy paste it will slice the first 140 characters
box.value.slice(0, tweetMax);

/*
!Purpose: This function will be triggered when key is pressed
!Action: 1. It will update the count
!        2. If error msg is there it will remove if key is pressed i.e(now the count is not zero)
!        3. It will outline the tweet-box if it exceeds the tweet_max 
*/
function checkCount() {
    let count = box.value.length;

    if (er = true) {
        error.innerText = ''
    }

    if (count > tweetMax + 1) {
        box.style.outline = '1px solid red'
        tweetCount.style = 'color:red'
    }
    else {
        box.style.outline = 'none'
        tweetCount.style = 'none'
    }
    tweetCount.innerHTML = `${count}/${tweetMax}`

}
/*
!Purpose: This function triggers when you press the tweet button
!Action: 1. It checks whether tweet_box is empty or not if empty then shows error 
!            msg which will be cleared when any key is pressed.
!        2. else not empty then it will remove the tweet box and shows success message

*/
function tweetSend() {
    let count = box.value.length
    if (count < 140 && count != 0) {
        sendPage.style.display = 'flex'
        tweetPage.style.display = 'none'
    }
    else {
        error.innerHTML = "You can't tweet empty"
        let er = true;
    }
}
/*
!Purpose: This function will be triggered when send button is pressed
!Action: 1. It will remove the success msg and shows the tweet_box
!          2. It resets all before showing the tweet_box
!          3. Resetting: It resets the previous text in tweet_box and 
!             also clears the count

*/
function tweetOg() {
    sendPage.style.display = 'none'
    box.value = ''
    tweetCount.innerHTML = `0/${tweetMax}`
    tweetPage.style = "display:flex;flexDirection:column"
}

// *Triggers
// This will trigger for strings which are not repeating
box.addEventListener('keyup', checkCount)
// This will trigger if strings are repeating i.e. if you hold press one key
box.addEventListener('keydown', checkCount)
// When you press send button
btnSend.addEventListener('click', tweetSend)
//When you press back button 
btnBack.addEventListener('click', tweetOg)