let CWidth = window.innerWidth
let CHeight = window.innerHeight - 100
const Colors = {
  fireflyYellow: '#EDCBAF',
  black: 'black'
}

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min
const interpolate = (start, end, step = 1, initial = start) => {
  let min = start
  let max = end
  let current = initial
  let expand = !!Math.floor(Math.random() * Math.floor(2))
  return () => {
    if (current >= max) {
      expand = false
    } else if (current < min) {
      expand = true
    }

    return expand ? (current += step) : (current -= step)
  }
}

const createBackgroundFirefly = () => ({
  position: {
    x: interpolate(getRandomInt(0, CWidth), CWidth, 0.005),
    y: interpolate(
      -100,
      CHeight + 100,
      Math.random(),
      getRandomInt(300, CHeight)
    )
  },
  radius: interpolate(getRandomInt(2, 3), getRandomInt(3, 4), 0.01)
})

const createForegroundFirelfy = () => ({
  position: {
    x: interpolate(getRandomInt(0, CWidth), CWidth, 0.08),
    y: interpolate(
      getRandomInt(0, CHeight),
      CHeight,
      0.03,
      getRandomInt(100, CHeight)
    )
  },
  radius: interpolate(getRandomInt(4, 5), getRandomInt(7, 8), 0.01)
})

const createRandomFirefly = () => ({
  position: {
    x: interpolate(getRandomInt(0, CWidth), CWidth, 0.4),
    y: interpolate(getRandomInt(0, CHeight), CHeight, 0.07)
  },
  radius: interpolate(getRandomInt(2, 3), getRandomInt(3, 4), 0.01)
})

const state = {
  fireflies: [
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createRandomFirefly(),
    createBackgroundFirefly(),
    createBackgroundFirefly(),
    createBackgroundFirefly(),
    createBackgroundFirefly(),
    createBackgroundFirefly(),
    createBackgroundFirefly(),
    createBackgroundFirefly(),
    createBackgroundFirefly(),
    createBackgroundFirefly(),
    createBackgroundFirefly(),
    createForegroundFirelfy(),
    createForegroundFirelfy(),
    createForegroundFirelfy(),
    createForegroundFirelfy(),
    createForegroundFirelfy(),
    createForegroundFirelfy(),
    createForegroundFirelfy(),
    createForegroundFirelfy()
    // {
    //   position: {
    //     x: interpolate(getRandomInt(250, 600), CWidth, 0.4),
    //     y: interpolate(getRandomInt(50, 350), CHeight, 0.4)
    //   },
    //   radius: interpolate(2, 5, 0.04)
    // },
    // {
    //   position: {
    //     x: interpolate(getRandomInt(400, CWidth), CWidth, 0.4),
    //     y: interpolate(getRandomInt(150, CHeight), CHeight, 0.4)
    //   },
    //   radius: interpolate(1, 4, 0.04)
    // },
    // {
    //   position: {
    //     x: interpolate(getRandomInt(600, CWidth), CWidth, 0.4),
    //     y: interpolate(getRandomInt(0, CHeight), CHeight, 0.4)
    //   },
    //   radius: interpolate(4, 7, 0.05)
    // }
  ]
}

const drawFireflies = ctx => {
  state.fireflies.forEach(f => {
    const x = f.position.x()
    const y = f.position.y()
    // context.filter = 'blur(4px)'

    ctx.fillStyle = Colors.fireflyYellow
    ctx.moveTo(x, y)
    ctx.arc(x, y, f.radius(), degToRad(0), degToRad(360), false)
  })
}

var canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const resizeCanvas = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  CWidth = window.innerWidth
  CHeight = window.innerHeight
}

const degToRad = deg => (Math.PI / 180) * deg

export const initialize = () => {
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas, false)
}

export const circularPath = (radius, start = 0) => {
  let time = start
  let step = 0.001
  return () => {
    time += step
    return {
      x: radius * Math.cos(time),
      y: radius * Math.sin(time)
    }
  }
}

export const drawstar = (ctx, x, y) => {
  ctx.strokeStyle = Colors.fireflyYellow
  ctx.moveTo(x, y)
  ctx.arc(x, y, 0.1, degToRad(0), degToRad(360), false)
}

const stars = [...Array(80).keys()].map(n =>
  circularPath(n * 3 + 15, getRandomInt(0, 360))
)

export const drawLoop = () => {
  window.requestAnimationFrame(drawLoop)
  // context.clearRect(0, 0, CWidth, CHeight)
  // context.fillStyle = 'black'
  // context.fillRect(0, 0, CWidth, CHeight)

  const rotate = getRandomInt(1, 30)

  context.beginPath()
  // drawFireflies(context)
  stars.forEach(star => {
    const { x, y } = star()
    drawstar(context, CWidth / 2 + x, CHeight / 2 + y)
  })
  // c.stroke()
  context.lineWidth = 0.5 + Math.random() * 1.5
  // context.fill()

  // context.filter = `blur(1.5px)`
  // context.filter = `blur(0) brightness(${getRandomInt(
  //   50,
  //   130
  // )}%) contrast(90%) grayscale(20%)`
  context.stroke()

  context.font = '30px Fira Code'
  context.fonrFamily = 'Fira Code'
  context.fillStyle = '#f9331f'
  // context.filter = `brightness(${getRandomInt(80, 800)}%)`
  context.fillText('A thing of beauty is a joy forever', 180, CHeight / 3)
}
