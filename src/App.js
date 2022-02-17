import logo from './logo.svg';
import './App.css';
import Card from './Card';
var icon = [(<span class="fa-li"><i class="fas fa-check"></i></span>)]
var cardData =
[{
    one : "Free",
    two : "$0",
    three : "/month",
    four : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>),
    five : (<li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>),
    six : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>),
    seven : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>),
    eight : (<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>),
    nine : (<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>),
    ten : (<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>),
    eleven : (<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>)
  },
  {
    one : "Plus",
    two : "$9",
    three : '/month',
    four : (<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>),
    five : (<li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>),
    six : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>),
    seven : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>),
    eight : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>),
    nine : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>),
    ten : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>),
    eleven : (<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>)
  },
  {
    one : "Pro",
    two : "$49",
    three : "/month",
    four : (<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong></li>),
    five : (<li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>),
    six : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>),
    seven : ( <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>),
    eight : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>),
    nine : (<li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>),
    ten : (<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>),
    eleven : ( <li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>)
  }
]
function App() {
  return (
    <section className='pricing py-5'>
      <div className='container'>
        <div className='row'>
          {
            cardData.map((data)=>{
              return <Card icon={icon} data={data}></Card>
            })
          }
        </div>
      </div>
    </section>
  );
}

export default App;
