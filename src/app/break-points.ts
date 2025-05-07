export const size = {
  mobile: '375px',
  laptop: '1440px',
}

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  laptop: [`(min-width: ${size.mobile})`, `(max-width: ${parseInt(size.laptop) - 1})`],
  desktop: `(min-width: ${size.laptop})`
}