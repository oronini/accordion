(()=> {
  class Acordion {
    constructor(obj) {
      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);
    
      const triggerLen = $trigger.length;
      let index = 0;
      while (index < triggerLen) {
        $trigger[index].addEventListener('click', (e)=> this.clicHndler(e));
        index++;
      }
    }

    clicHndler(e) {
      e.preventDefault();
      
      const $target = e.target;
      const $content = $target.nextElementSibling;
  
      if($content.style.display === 'block') {
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      }
    }
  }

  const tes1Accordion = new Acordion({hookName: '#js-faq', tagName: 'p'});
  const tes2Accordion = new Acordion({hookName: '#js-accordion', tagName: 'a'});
  const tes3Accordion = new Acordion({hookName: '#js-accordion-mini', tagName: 'dt'});
})();