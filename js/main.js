/* psuedo code
1. birthday month and birthday date added into the inputs
2. month and date are reviewed
  2.a if month is between a specfic date than your horoscope will appear
3. horoscope is produced into the h2
*/
// click event to submit your birthday and run function
document.querySelector('.submit').addEventListener('click', getYourHoroscope)


function getYourHoroscope (){

  let month = document.querySelector('#birthMonth').value.toLowerCase()
  let day = document.querySelector('#birthDate').value.toLowerCase()

// aries
  if (month === "march" && day >= 21 && day <=31 ) {
  document.querySelector('.horoscopeResults').innerText= "Aries: You may not be sure what to think today, Aries. Mental confusion could be the day's theme for you, but don't let it get you down. Realize that it's just one of those days when none of the pieces fit right. The truth is that they do fit somewhere, just not now. Lay low and wait for this phase to pass. Things will pick up soon as the fog lifts and you can see clearly again."
}else if (month === "april" && day >= 1 && day <= 19){
  document.querySelector('.horoscopeResults').innerText= "Aries: You may not be sure what to think today, Aries. Mental confusion could be the day's theme for you, but don't let it get you down. Realize that it's just one of those days when none of the pieces fit right. The truth is that they do fit somewhere, just not now. Lay low and wait for this phase to pass. Things will pick up soon as the fog lifts and you can see clearly again."

// Taurus

} else if (month === "april" && day >= 20 && day <= 30){
  document.querySelector('.horoscopeResults').innerText= "Taurus: It is a long road to becoming exactly the person you want to be. Remember that you can't change who you are. Input from every person you know, and lessons from every bump in the road all contribute to who you are as a person. Be proud of yourself, but also realize that there is a great deal more developing that needs to be done on an internal level. Meditate or just stick to yourself for a little while to go inward"
}else if (month ==="may" && day >=1 && day <= 20 ){
    document.querySelector('.horoscopeResults').innerText= "Taurus: It is a long road to becoming exactly the person you want to be. Remember that you can't change who you are. Input from every person you know, and lessons from every bump in the road all contribute to who you are as a person. Be proud of yourself, but also realize that there is a great deal more developing that needs to be done on an internal level. Meditate or just stick to yourself for a little while to go inward"

// Gemini

}else if (month === "may" && day >= 21 && day <= 31){
  document.querySelector('.horoscopeResults').innerText= "Gemini: There is an important lesson for you to learn today, so don't shy away from the classroom. It is important for you to control your attitude at this time or else it is likely to take control of you. It could be that your ego is a bit over inflated and you may ended up turning people away if you are not aware of how your actions are affecting them. Or it could be that you need to make a change in your approach."
}else if (month ==="june" && day >=1 && day <= 21 ){
    document.querySelector('.horoscopeResults').innerText= "Gemini: There is an important lesson for you to learn today, so don't shy away from the classroom. It is important for you to control your attitude at this time or else it is likely to take control of you. It could be that your ego is a bit over inflated and you may ended up turning people away if you are not aware of how your actions are affecting them. Or it could be that you need to make a change in your approach."

  //cancer

}else if (month === "june" && day >= 22 && day <= 30){
  document.querySelector('.horoscopeResults').innerText= " Cancer: Today is your day to become a hero. Don't think that just because you may not be dressed in fancy tights and a cape doesn't mean that you can't make an important difference in someone's life today. Step up to the plate even if it is not your turn to be up at bat. True heroes are those who are able to do what needs to be done when it needs to be done regardless of the circumstances"
}else if (month ==="july" && day >=1 && day <= 20 ){
    document.querySelector('.horoscopeResults').innerText= "Cancer: Today is your day to become a hero. Don't think that just because you may not be dressed in fancy tights and a cape doesn't mean that you can't make an important difference in someone's life today. Step up to the plate even if it is not your turn to be up at bat. True heroes are those who are able to do what needs to be done when it needs to be done regardless of the circumstances"

// Leo

}else if (month === "july" && day >= 23 && day <= 31){
  document.querySelector('.horoscopeResults').innerText= "Leo: Today you may be feeling a little surer of yourself than usual. Most of the time you are a fairly shy and reserved person. Today you should try and make people a little more aware of you, to take you seriously. It's time that people respected you a little more, especially the people around you. Try, for once, to think of yourself before you think of other people. You're worth it!"
}else if (month ==="august" && day >=1 && day <= 22 ){
    document.querySelector('.horoscopeResults').innerText= "Leo: Today you may be feeling a little surer of yourself than usual. Most of the time you are a fairly shy and reserved person. Today you should try and make people a little more aware of you, to take you seriously. It's time that people respected you a little more, especially the people around you. Try, for once, to think of yourself before you think of other people. You're worth it!"

// Virgo

}else if (month === "august" && day >= 23 && day <= 31){
  document.querySelector('.horoscopeResults').innerText= "Virgo: One thing is for sure, you would rather be in bed with a good book than out in the stressful world we live in. But you may be feeling like you're missing out on some of the good things in life. How much time do you spend with other people ? Why not try finding someone else who shares your tastes for good books and being in bed?! Think about it!"
}else if (month ==="September" && day >=1 && day <= 22 ){
    document.querySelector('.horoscopeResults').innerText= "Virgo: One thing is for sure, you would rather be in bed with a good book than out in the stressful world we live in. But you may be feeling like you're missing out on some of the good things in life. How much time do you spend with other people ? Why not try finding someone else who shares your tastes for good books and being in bed?! Think about it!"

// Libra

}else if (month === "september" && day >= 23 && day <= 31){
  document.querySelector('.horoscopeResults').innerText= "Libra: This is probably a shaky period for you. You've been evolving a lot. Today could well be a day of retreat. This could be a time to question your opinions, beliefs and deep convictions. If you can do this without too much fear of the momentary vacuum this is sure to create, you'll be on the right track"
}else if (month ==="September" && day >=1 && day <= 23 ){
    document.querySelector('.horoscopeResults').innerText= "Libra: This is probably a shaky period for you. You've been evolving a lot. Today could well be a day of retreat. This could be a time to question your opinions, beliefs and deep convictions. If you can do this without too much fear of the momentary vacuum this is sure to create, you'll be on the right track"

// Scorpius

}else if (month === "october" && day >= 24 && day <= 31){
  document.querySelector('.horoscopeResults').innerText= "Scorpio: You may have a hard time stating your own opinions about things. It may be a lot easier for you to rethink other people's opinions, in order to feel involved in what happens around you. But it is not enough just to think something; you have got to tell the world about it. Trust yourself, and take a few days to think about this new challenge in your life"
}else if (month ==="november" && day >=1 && day <= 21 ){
    document.querySelector('.horoscopeResults').innerText= "Scorpio: You may have a hard time stating your own opinions about things. It may be a lot easier for you to rethink other people's opinions, in order to feel involved in what happens around you. But it is not enough just to think something; you have got to tell the world about it. Trust yourself, and take a few days to think about this new challenge in your life"

// Sagittarius November 22–December 21

}else if (month === "november" && day >= 22 && day <= 30){
  document.querySelector('.horoscopeResults').innerText="Sagittarius: don't be surprised if you meet people who are quite self-centered today. In general, it could be that you have a hard time understanding people that are egotistical and who don't participate in with others. Today, you could try looking at them as if they had something to teach you: the value of living a little bit more for yourself, and less for others."
}else if (month ==="december" && day >=1 && day <= 21 ){
    document.querySelector('.horoscopeResults').innerText= "Sagittarius: don't be surprised if you meet people who are quite self-centered today. In general, it could be that you have a hard time understanding people that are egotistical and who don't participate in with others. Today, you could try looking at them as if they had something to teach you: the value of living a little bit more for yourself, and less for others."

// Capricornus December 22–January 19

}else if (month === "december" && day >= 22 && day <= 31){
    document.querySelector('.horoscopeResults').innerText= "Capricorn: You are a creative person, but people have alrady told you that. But there is a difference between creation for your own personal gain and creation for a common goal. You tend to be a little too involved with yourself soemtimes. Think about putting your own interests aside today. It will do you a world of good."
}else if (month ==="january" && day >=1 && day <= 19 ){
      document.querySelector('.horoscopeResults').innerText= "Capricorn: You are a creative person, but people have alrady told you that. But there is a difference between creation for your own personal gain and creation for a common goal. You tend to be a little too involved with yourself soemtimes. Think about putting your own interests aside today. It will do you a world of good."

// Aquarius  January 20–February 18

}else if (month === "january" && day >= 20 && day <= 31){
    document.querySelector('.horoscopeResults').innerText= "Aquarius: If you feel thwarted at every turn today, you might want to give some thought as to why. You may feel frustrated, when really you should be grateful. It seems you have a guardian angel on your shoulder, doing her best to steer you in the right direction. You, stubborn fellow that you are, keep insisting on going in the opposite direction! Stop for just a moment and listen to your instincts. They will lead you in the right direction."
}else if (month ==="february" && day >=1 && day <= 18 ){
      document.querySelector('.horoscopeResults').innerText= "Aquarius: If you feel thwarted at every turn today, you might want to give some thought as to why. You may feel frustrated, when really you should be grateful. It seems you have a guardian angel on your shoulder, doing her best to steer you in the right direction. You, stubborn fellow that you are, keep insisting on going in the opposite direction! Stop for just a moment and listen to your instincts. They will lead you in the right direction."

// Pisces  February 19–March 20

}else if (month === "february" && day >= 19 && day <= 28){
    document.querySelector('.horoscopeResults').innerText= "Pisces: You have always known, that anything human beings try to achieve often requires a certain amount of difficult decision making. Today, you will get your chance to prove this. Something just isn't right at the moment. You've been aware of it for sometime now. A superior might ask you to do something today which requires a very difficult decision"
}else if (month ==="march" && day >=1 && day <= 20){
      document.querySelector('.horoscopeResults').innerText= "Pisces: You have always known, that anything human beings try to achieve often requires a certain amount of difficult decision making. Today, you will get your chance to prove this. Something just isn't right at the moment. You've been aware of it for sometime now. A superior might ask you to do something today which requires a very difficult decision"

}else {
document.querySelector('.horoscopeResults').innerText="you did not fill out the form correctly";
}


}
// March 21–April 19
// April 20–May 20
// May 21–June 21
// June 22–July 22
// July 23–August 22
// August 23–September 22
// September 23–October 23
// October 24–November 21
