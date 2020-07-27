var colors=["green","orange","red","purple","lightblue"];
var r_color=(Math.floor(Math.random()*5)%5);
var r_no = Math.floor(Math.random() * (6-0+1)) + 0;

var clicks=0;
var t1=0;
var t2=0;
var sum=0;
var tries=0;
var st=0;

function tryagain()
{

  clicks=0;
  t1=0;
  t2=0;
  st=0;

  document.getElementById('b0').textContent = "click here to begin";

  r_color=(Math.floor(Math.random()*5)%5);
  r_no = Math.floor(Math.random() * (6-0+1)) + 0;
   document.getElementById("b0").style.backgroundColor = "";

}

function execute()
{
  clicks++;

  if(clicks==1)
  {
    document.getElementById("b0").textContent="wait for "+colors[r_color];
    setTimeout(function() {
                          if(st==0)
                          {
                              t1 = new Date();
                              document.getElementById("b0").textContent = "click !!!";
                              document.getElementById("b0").style.backgroundColor = colors[r_color];
                          }
                              }, r_no*1000);
  }

  if(clicks>1)
  {
      if(t1==0)
      {
        st=1;
        document.getElementById("b0").textContent = "too soon !!!";
        if(clicks<3)
        getSound();
      }
      else
      {
        if(clicks<3)
        {
         tries++;
         t2 = new Date();
         sum+=(t2-t1);
         document.getElementById("b0").innerHTML = (t2-t1)+" ms"+"<br><br><br>"+"avg| "+Math.round((sum/tries))+" ms"+"&emsp;&emsp;"+"tries| "+tries;
     }
    }
  }

}

function getSound()
{
  var aud = document.createElement('audio');
  aud.setAttribute('src','loud.mp3');
  aud.play()
  aud.stop();
}

function res()
{
  location.reload();
}
