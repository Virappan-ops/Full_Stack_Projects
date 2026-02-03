import { useState, useEffect, useRef } from 'react'
import './App.css'
import HoverRating from './components/rating'
import ImageAvatars from './components/avatar'
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';
import GradientBlinds from './components/GradientBlinds'


function App() {
  const [count, setCount] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const scrollRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setScrollY(scrollRef.current.scrollTop)
      }
    }
    const ref = scrollRef.current
    if (ref) {
      ref.addEventListener('scroll', handleScroll)
      return () => ref.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Full-page GradientBlinds background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
          scrollY={scrollY}
        />
      </div>

      {/* Top right avatar */}
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: 10
      }}>
        <ImageAvatars />
      </div>

      {/* Main content area - full screen ScrollStack */}
      <div 
        ref={scrollRef}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100vh',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto'
        }}
      >
        <div style={{ width: '100%', height: '100%' }}>
          <ScrollStack
            itemDistance={100}
            itemScale={0.03}
            itemStackDistance={30}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.85}
            rotationAmount={0}
            blurAmount={0}
            useWindowScroll={false}
            onStackComplete={() => console.log('Stack animation complete')}
          >
            <ScrollStackItem itemClassName="card-blue">
              <h2>Name</h2>
              <p>Virappan</p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="card-green">
              <h2>UID</h2>
              <p>23BAI70674</p>
            </ScrollStackItem>
            <ScrollStackItem itemClassName="card-purple">
              <h2>Section</h2>
              <p>23AML - 7B</p>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>

      {/* Footer stuck to bottom */}
      <footer style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        zIndex: 10
      }}>
        <HoverRating />
      </footer>
    </div>
  )
}

export default App
