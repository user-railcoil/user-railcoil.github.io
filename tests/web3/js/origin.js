let 
  head = document.querySelector( 'head' ),
  body = document.querySelector( 'body' ),
  meta = document.createElement( 'meta' ),
  ess = document.querySelector( '.essential' ),
  adv = document.querySelector( '.advanced' ),
  pro = 
    document.querySelector( '.professional' ),
  span1 = 
    document
      .querySelector( 'div:nth-of-type( 2 )' ),
  span2 =
    document
      .querySelector( 'div:nth-of-type( 4 )' );

meta.name = 'theme-color';
meta.content = '#0bb';

//hover
function span1Hover() {
  head.appendChild( meta );
  body.style.backgroundColor = '#0bb';
  span1.style.backgroundColor = '#0aa';
  span2.style.backgroundColor = '#ddd';  
}
function doubleSpanHover() {
  span1.style.backgroundColor = '#0aa';
  span2.style.backgroundColor = '#0aa';  
}
function span2Hover() {
  body.style.backgroundColor = '#0bb';
  span1.style.backgroundColor = '#ddd';
  span2.style.backgroundColor = '#0aa';  
}

//down
function span1Down() {
  span1.style.backgroundColor = '#222';
  span2.style.backgroundColor = '#ddd';  
}
function doubleSpanDown() {
  span1.style.backgroundColor = '#222';
  span2.style.backgroundColor = '#222';  
}
function span2Down() {
  span1.style.backgroundColor = '#ddd';
  span2.style.backgroundColor = '#222';  
}

//up
function span1Up() {
  span1.style.backgroundColor = '#0aa';
  span2.style.backgroundColor = '#ddd';
}
function doubleSpanUp() {
  span1.style.backgroundColor = '#0aa';
  span2.style.backgroundColor = '#0aa';
}
function span2Up() {
  span1.style.backgroundColor = '#ddd';
  span2.style.backgroundColor = '#0aa'; 
}

//out
function spanOut() {
  span1.style.backgroundColor = '#ddd';
  span2.style.backgroundColor = '#ddd';
  meta.remove();
  body.style.backgroundColor = '#eee';
}

ess.addEventListener( 'mouseover', span1Hover );
ess.addEventListener( 'mousedown', span1Down );
ess.addEventListener( 'mouseup', span1Up );
ess.addEventListener( 'mouseout', spanOut );

adv.addEventListener
  ( 'mouseover', doubleSpanHover );
adv.addEventListener
  ( 'mousedown', doubleSpanDown );  
adv.addEventListener
  ( 'mouseup', doubleSpanUp );  
adv.addEventListener
  ( 'mouseout', spanOut );  

pro.addEventListener( 'mouseover', span2Hover );
pro.addEventListener( 'mousedown', span2Down );
pro.addEventListener( 'mouseup', span2Up );
pro.addEventListener( 'mouseout', spanOut );

//onclick
function retract() {
  ess.classList.add( 'retract' );
  adv.classList.add( 'retract' );
  pro.classList.add( 'retract' );
  span1.classList.add( 'expand' );
}

ess.addEventListener( 'click', retract );
