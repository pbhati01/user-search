export default ({
  userSearchContainer: {
    width: 316,
    overflow: 'hidden',
    margin: ['1rem', 'auto']
  },
  marginBottom: {
    marginBottom: '1rem'
  },
  listItem: {
    cursor: 'pointer'
  },
  animateListEnter: {
    opacity: 0.01,
    height: 0,
    margin: 0,
  },
  animateListEnterActive: {
    opacity: 1,
    height: 20,
    margin: ['1rem', 0, '0.2rem'],
    transition: 'all 300ms ease-out',
  },
  animateListExit: {
    height: 20,
    margin: ['1rem', 0, '0.2rem'],
    opacity: 1,
  },
  animateListExitActive: {
    opacity: 0.01,
    height: 0,
    margin: 0,
    transition: 'all 300ms ease-in',
  },
});
