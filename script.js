window.addEventListener('scroll', function() {
    var scrollArrow = document.getElementById('scroll-arrow');
    if (scrollArrow) {
      if (window.scrollY > 0) {
        scrollArrow.style.display = 'block';
      } else {
        scrollArrow.style.display = 'none';
      }
    }
  });

  let btnmenu= document.getElementById('btn-menu')
let menu= document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnmenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.vermais');
    const imgPort = document.querySelector('.img-port4');

    btn.addEventListener('click', () => {
        if (imgPort.style.display === 'none' || imgPort.style.display === '') {
            imgPort.style.display = 'block';
            btn.textContent = 'Ver Menos'; // Alterar o texto do botão para "Ver Menos"
        } else {
            imgPort.style.display = 'none';
            btn.textContent = 'Ver Mais'; // Alterar o texto do botão para "Ver Mais"
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.vermais');
    const imgPort = document.querySelector('.img-port5');

    btn.addEventListener('click', () => {
        if (imgPort.style.display === 'none' || imgPort.style.display === '') {
            imgPort.style.display = 'block';
            btn.textContent = 'Ver Menos'; // Alterar o texto do botão para "Ver Menos"
        } else {
            imgPort.style.display = 'none';
            btn.textContent = 'Ver Mais'; // Alterar o texto do botão para "Ver Mais"
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.vermais');
    const imgPort = document.querySelector('.img-port6');

    btn.addEventListener('click', () => {
        if (imgPort.style.display === 'none' || imgPort.style.display === '') {
            imgPort.style.display = 'block';
            btn.textContent = 'Ver Menos'; // Alterar o texto do botão para "Ver Menos"
        } else {
            imgPort.style.display = 'none';
            btn.textContent = 'Ver Mais'; // Alterar o texto do botão para "Ver Mais"
        }
    });
});

  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.texto');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});
  document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.img-txt');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.h1-txt');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.h1-sobre');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.img-sobre');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});
document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.p-sobre');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.h1-projetos');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.img-port');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});


document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.img-port2');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});
document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.img-port3');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.img-port4');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
  });


document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.img-port5');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});
document.addEventListener('DOMContentLoaded', function() {
  const txtApresentacao = document.querySelector('.img-port6');
  
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };
  
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  };
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.rodape');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});


document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.inicio-servicos');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.img-servi');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.h1-servicos');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});
document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.orcamento');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.img-servi2');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.h1-servicos2');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});

document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.orcamento2');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});
document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.animacao');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});
document.addEventListener('DOMContentLoaded', function() {
    const txtApresentacao = document.querySelector('.vermais');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(txtApresentacao);
});