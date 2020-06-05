export default ({
  userDetailsContainer: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 'auto',
    height: 'auto',
    minWidth: 200,
    minHeight: 200,
    transform: 'translate(-50%, -50%)',
    padding: '1rem',
    overflow: 'hidden',
    background: '#ffffff',
  },
  backgroundOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    background: '#003264',
    opacity: 0.7,
  },
  closeBtn: {
    width: '100%',
    marginTop: '1rem'
  },
  animateModalEnter: {
    opacity: 0,
  },
  animateModalEnterActive: {
    opacity: 1,
    transition: 'all 300ms',
  },
  animateModalExit: {
    opacity: 1,
  },
  animateOverlayEnterActive: {
    opacity: 0.7,
    transition: 'all 300ms',
  },
  animateOverlayExit: {
    opacity: 0.7,
  },
  animateModalExitActive: {
    opacity: 0,
    transition: 'all 300ms',
  },
});
