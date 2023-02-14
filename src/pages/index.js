import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Slider } from 'antd';

export default function Component(props) {
  const { data } = props
  const { allContentfulHero, allContentfulIntro } = data;
  const [calculatorRevenue, setCalculatorRevenue] = useState({
    purchase: 0,
    downPayment: 0,
    repaymentTime: 0,
    interestRate: 0
  })
  const descriptionRaw = JSON.parse(allContentfulHero?.nodes[0]?.description?.raw);

  const loanAmount = useMemo(() => {
    const p = calculatorRevenue.purchase - calculatorRevenue.downPayment
    const r = calculatorRevenue.interestRate;
    const n = calculatorRevenue.repaymentTime
    const result = p * (r * (1 + r) ^ (n / ((1 + r) ^ n) - 1));
    return result
  }, [calculatorRevenue])

  const updateCalculation = useCallback((value, key) => {
    setCalculatorRevenue({ ...calculatorRevenue, [key]: value })
  }, [calculatorRevenue])

  return <Layout>
    <div className={`text-white h-[500px] w-full flex gap-20 items-center lg:px-36 relative py-5 px-12`}>
      <div className='absolute w-full h-full lg:-mx-36 -mx-12'>
        <img className='w-full h-full object-cover' src={`http:${allContentfulHero?.nodes[0]?.bannerUrl?.file?.url}`} />
      </div>
      <div className='w-6/12 flex flex-col gap-y-10 z-10'>
        <h1 className='text-5xl font-bold'>
          {allContentfulHero?.nodes[0]?.heroTitle}
        </h1>
        <p>{descriptionRaw?.content[0]?.content[0]?.value}</p>
        <div>
          <button className='border-none bg-orange p-2 px-10'>{allContentfulHero?.nodes[0]?.buttonText}</button>
        </div>
      </div>
      <div className='w-9/12 h-full relative'>
      </div>
      {/* <img src='../../Vector4.png' className='absolute w-[500px] h-[350px] top-[100px] right-[0px]'></img>
      <img src='../../Vector5.png' className='absolute w-[400px] h-[350px] top-[150px] right-[0px]'></img> */}
    </div>
    <div className='mt-20 px-10 text-center'>
      <h1 className='text-3xl font-bold'>High Quality Output, Awesome Service</h1>
      <div className='mt-10 flex gap-20 justify-center flex-wrap'>
        {allContentfulIntro?.nodes?.map(intro => <div className='p-10 bg-white text-center lg:w-3/12 w-full flex flex-col gap-y-10'>
          <div className='flex justify-center'>
            <div className='bg-orange w-[50px] h-[50px] rounded-full flex justify-center items-center'>
              <i class={`fa ${intro.icon} text-white`}></i>
            </div>
          </div>
          <h2 className='text-xl font-bold'>{intro.title}</h2>
          <span>{intro.description}</span>
        </div>)}
      </div>
    </div>
    <div className='mt-36 flex flex-wrap'>
      <div className='bg-banner lg:p-20 p-10 text-white flex flex-col gap-y-10 w-full lg:w-6/12'>
        <h1 className='text-5xl font-bold'>Mortgage Calculator</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div className='flex flex-wrap gap-y-10'>
          <div className='lg:w-6/12 w-full pr-10'>
            <p className='font-bold mb-2'>Purchase Price: ${calculatorRevenue.purchase}</p>
            {/* <div className='rounded-full bg-white h-[10px]'>
              <div className='bg-orange rounded-full w-[55%] h-full'></div>
            </div> */}
            <Slider max={100000} step={1000} onAfterChange={value => updateCalculation(value, "purchase")} />
          </div>
          <div className='lg:w-6/12 w-full pr-10'>
            <p className='font-bold mb-2'>Down Payment: ${calculatorRevenue.downPayment}</p>
            {/* <div className='rounded-full bg-white h-[10px]'>
              <div className='bg-orange rounded-full w-[60%] h-full'></div>
            </div> */}
            <Slider max={100000} step={1000} onAfterChange={value => updateCalculation(value, "downPayment")} />
          </div>
          <div className='lg:w-6/12 w-full pr-10'>
            <p className='font-bold mb-2'>Repayment time: {calculatorRevenue.repaymentTime} years</p>
            {/* <div className='rounded-full bg-white h-[10px]'>
              <div className='bg-orange rounded-full w-[50%] h-full'></div>
            </div> */}
            <Slider step={1} onAfterChange={value => updateCalculation(value, "repaymentTime")} />
          </div>
          <div className='lg:w-6/12 w-full pr-10'>
            <p className='font-bold mb-2'>Interest Rate: {calculatorRevenue.interestRate}%</p>
            {/* <div className='rounded-full bg-white h-[10px]'>
              <div className='bg-orange rounded-full w-[45%] h-full'></div>
            </div> */}
            <Slider step={1} onAfterChange={value => updateCalculation(value, "interestRate")} />
          </div>
        </div>
        <div>
          <p className='font-bold'>Loan amount:  <span className='text-2xl text-orange'>${loanAmount}</span></p>
          <p className='font-bold'>Estimated repayment per month: <span className='text-2xl text-orange'>$1,300</span></p>
        </div>
      </div>
      <div className='flex flex-col gap-y-10 lg:p-20 p-10 w-full lg:w-6/12'>
        <h1 className='text-6xl font-bold'>Try our awesome Calculator</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        <div><button className='border-none bg-orange p-2 px-10 text-white'>Register</button></div>
      </div>
    </div>
  </Layout>
}

export const pageQuery = graphql`
  query GetHero {
    allContentfulIntro {
      nodes {
        title
        description
        icon
      }
    }
    allContentfulHero {
      nodes {
        heroTitle
        description {
          raw
        }
        id
        buttonText
        bannerUrl {
          file {
            url
          }
        }
      }
    }
  }
`