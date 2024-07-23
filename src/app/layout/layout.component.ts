import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements AfterViewInit {
  faqs = [
    {
      question: 'Was ist HHC?',
      answer:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      open: false,
    },
    {
      question: 'Ist HHC natürlich?',
      answer:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      open: false,
    },
    {
      question: 'Ist HHC legal?',
      answer:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      open: false,
    },
    {
      question: 'Wie ist die Wirkung von HHC?',
      answer:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      open: false,
    },
    {
      question: 'Warum soll ich die HHC Produkte hier kaufen?',
      answer:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      open: false,
    },
  ];

  toggleFaq(faq: any, event: MouseEvent) {
    event.stopPropagation();
    faq.open = !faq.open;
  }

  ngAfterViewInit() {
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    videoWrappers.forEach((wrapper) => {
      const video = wrapper.querySelector('video') as HTMLVideoElement | null;
      const playButton = wrapper.querySelector(
        '.custom-play-button',
      ) as HTMLElement | null;

      if (video && playButton) {
        playButton.addEventListener('click', () => {
          video.play();
          playButton.style.display = 'none';
        });

        video.addEventListener('pause', () => {
          playButton.style.display = 'flex';
        });

        video.addEventListener('playing', () => {
          playButton.style.display = 'none';
        });

        // Video stoppen bei Klick auf das Video selbst
        video.addEventListener('click', () => {
          if (!video.paused) {
            video.pause();
          } else {
            video.play();
          }
        });
      }
    });
  }
}
