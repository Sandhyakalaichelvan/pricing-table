import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Pricecard from './components/pricecard';
function Sample()
{
  let data = [
    {
      product:"FREE",
      price:'$0',
      users:"Single User",
      usersEnabler:true,
      storage:"5GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:false,
      phonesupport:"Dedicated Phone Support",
      phonesupportEnabler:false,
      subDomain:"Free Subdomain",
      subDomainEnabler:false,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    },
    {
      product:"PLUS",
      price:'$9',
      users:"5 User",
      usersEnabler:true,
      storage:"50GB Storage",
      storageEnabler:true,
      publicProjects:"Unlimited Public Projects",
      publicProjectsEnabler:true,
      communityAccess:"Community Access",
      communityAccessEnabler:true,
      privateProjects:"Unlimited Private Projects",
      privateProjectsEnabler:true,
      phonesupport:"Dedicated Phone Support",
      phonesupportEnabler:true,
      subDomain:"Free Subdomain",
      subDomainEnabler:true,
      reports:"Monthly Status Reports",
      reportsEnabler:false
    }, 
    {
    product:"PLUS",
    price:'$49',
    users:"Unlimited User",
    usersEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phonesupport:"Dedicated Phone Support",
    phonesupportEnabler:true,
    subDomain:"Unlimited Free Subdomain",
    subDomainEnabler:true,
    reports:"Monthly Status Reports",
    reportsEnabler:true
  }
  ]

  return<>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
     <Pricecard type={data[0]}/>
     <Pricecard type={data[1]}/>
     <Pricecard type={data[2]}/>
  
    </div>
  </div>
</section>
  </>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);

