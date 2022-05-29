import 'react-circular-progressbar/dist/styles.css';

import { CircularProgressbar } from 'react-circular-progressbar';
import styled from 'styled-components'

export default function ProgressBar({porcentagem}) {
  return ( 
    <Container>
      <CircularProgressbar
        value={porcentagem}
        text='Hoje'
        background
        backgroundPadding={6}
        styles={{
          // Customize the root svg element
          root: {
            width: '91px'
          },
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: '#FFFFFF',
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'any',
            // Customize transition animation
            transition: 'stroke-dashoffset 0.5s ease 0s',
            // Rotate the path
            transform: 'rotate(0turn)',
            transformOrigin: 'center center',
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "#52B6FF",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'square',
            // Rotate the trail
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          // Customize the text
          text: {
            // Text color
            fill: '#FFFFFF',
            // Text size
            fontSize: '16px',
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: '#52B6FF',
          },
        }}
      />
    </Container>
  )
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
`