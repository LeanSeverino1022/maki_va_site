var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    smartBackspace: true, // Default value,
    showCursor: false,
    typeSpeed: 10,
    backSpeed: 40,
    backDelay: 1000,
    // loop: true,
    onComplete: (self) => { setTimeout( _=> { self.reset() }, 7000);  }

  });