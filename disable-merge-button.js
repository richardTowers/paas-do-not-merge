(function () {
  function disableMergeButton() {
    const prefixes = [
      '/alphagov/paas-admin',
      '/alphagov/paas-cf',
      '/alphagov/paas-bootstrap',
    ]

    if (prefixes.some(prefix => window.location.pathname.startsWith(prefix))) {
      document.body.classList.add('disable-merge-button')
    }
  }
  disableMergeButton()
  document.addEventListener("turbolinks:load", disableMergeButton)
})()

