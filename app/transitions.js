export default function () {
    this.transition(
        this.hasClass('fullscreen-modal-container'),
        this.toValue(true),
        this.use('fade', {duration: 150}),
        this.reverse('fade', {duration: 150})
    );

    this.transition(
        this.hasClass('fade-transition'),
        this.use('crossFade', {duration: 100})
    );
}
