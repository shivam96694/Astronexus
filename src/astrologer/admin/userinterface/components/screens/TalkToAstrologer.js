import AstrologerInfo from "../AstrologerInfo";
import InsideHeader from '../InsideHeader'
import Footer from "../Footer";

export default function TalkToAstrologer() {
  return (
<div>  
      <div>
    <InsideHeader />
</div>
    <div style={{ padding: 20,marginTop:'5%' }}>
      <AstrologerInfo />
    </div>

 <div>
            <Footer />
        </div>

    </div>

  );
}


