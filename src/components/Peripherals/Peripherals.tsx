import xm2w4kv2 from '../../assets/xm2w4kv2.png';
import aqc2sakuranight from '../../assets/aqc2sakuranight.png';
import mchoseace68gtsilver from '../../assets/mchoseace68gtsilver.png';
import sennheiserhd560s from '../../assets/sennheiserhd560s.png';
import nikesleevev2 from '../../assets/nikesleevev2.png';
import kiwiorchestralite from '../../assets/kiwiorchestralite.png';
import gravastarv60pro from '../../assets/gravastarv60pro.png';
import asus from '../../assets/asus.webp';
import op1w4kv2 from '../../assets/op1w4kv2.png';
import kyomiyuyo from '../../assets/kyomiyuyo.png';
import aqc2makonova from '../../assets/MAKO-NOVA.png';
import everglidesu66max from '../../assets/everglidesu66max.png';
import truthearzerored from '../../assets/truthearzerored.png';
import './Peripherals.css';

type GearType = 'mouse' | 'mousepad' | 'keyboard' | 'headset' | 'iem' | 'monitor' | 'sleeve';

interface GearItem {
  id: string;
  type: GearType;
  brand: string;
  name: string;
  specs: string[];
  image: string;
}

const GEAR: GearItem[] = [
  {
    id: 'mouse-egg-xm2w-4k-v2',
    type: 'mouse',
    brand: 'endgame gear',
    name: 'XM2w 4k v2',
    specs: ['white', '62g', '4000hz'],
    image: xm2w4kv2
  },
  {
    id: 'mousepad-xraypad-aqua-control-ii-mako-nova',
    type: 'mousepad',
    brand: 'x-raypad',
    name: 'Aqua Control II',
    specs: ['balance + speed', 'MAKO - NOVA', 'cloth'],
    image: aqc2makonova
  },
  {
    id: 'keyboard-everglide-su66-max',
    type: 'keyboard',
    brand: 'everglide',
    name: 'Su66 Max',
    specs: ['silver', 'yaoguang', '8000hz'],
    image: everglidesu66max
  },
  {
    id: 'headset-sennheiser-hd560s',
    type: 'headset',
    brand: 'sennheiser',
    name: 'HD560s',
    specs: ['black', '120 ohm'],
    image: sennheiserhd560s
  },
  {
    id: 'sleeve-nike-pro-elite-2-0',
    type: 'sleeve',
    brand: 'nike',
    name: 'Pro Elite 2.0',
    specs: ['black'],
    image: nikesleevev2
  },
  {
    id: 'mousepad-xraypad-aqua-control-ii-night',
    type: 'mousepad',
    brand: 'x-raypad',
    name: 'Aqua Control II',
    specs: ['balance + speed', 'night', 'cloth'],
    image: aqc2sakuranight
  },
  {
    id: 'keyboard-mchose-ace-68-gt',
    type: 'keyboard',
    brand: 'mchose',
    name: 'Ace 68 GT',
    specs: ['silver', 'gravastar ufo', '8000hz'],
    image: mchoseace68gtsilver
  },
  {
    id: 'iem-truthear-zero-red',
    type: 'iem',
    brand: 'truthear',
    name: 'Zero Red',
    specs: ['red', '1DD + 1BA In-Ear Monitor'],
    image: truthearzerored
  }
];

const WISHLIST: GearItem[] = [
  {
    id: 'iem-kiwi-ears-orchestra-lite',
    type: 'iem',
    brand: 'kiwi ears',
    name: 'Orchestra Lite',
    specs: ['purple', '8BA Performance In-Ear Monitor'],
    image: kiwiorchestralite
  },
  {
    id: 'keyboard-gravastar-mercury-v60-pro',
    type: 'keyboard',
    brand: 'gravastar',
    name: 'Mercury V60 Pro',
    specs: ['chrome silver', 'gravastar ufo', '8000hz'],
    image: gravastarv60pro
  },
  {
    id: 'monitor-asus-xg27aqwmg',
    type: 'monitor',
    brand: 'asus',
    name: 'XG27AQWMG',
    specs: ['tandem oled', '280hz', '0.03ms'],
    image: asus
  },
  {
    id: 'mouse-egg-op1w-4k-v2',
    type: 'mouse',
    brand: 'endgame gear',
    name: 'OP1w 4k v2',
    specs: ['white', '59.5g', '4000hz'],
    image: op1w4kv2
  },
  {
    id: 'mousepad-kyomi-yuyo',
    type: 'mousepad',
    brand: 'kyomi',
    name: 'Yuyo',
    specs: ['speed', 'cloth'],
    image: kyomiyuyo
  }
];

interface Stat {
  label: string;
  value: string;
}

const MOUSE_STATS: Stat[] = [
  { label: 'Sens', value: '30-50cm/360' },
  { label: 'DPI', value: '1000' },
  { label: 'Grip', value: 'Hybrid Claw' }
];

function GearCard({ item }: { item: GearItem }) {
  return (
    <div className="gear-card glass">
      <img className="gear-card-image" src={item.image} alt={`${item.brand} ${item.name}`} />
      <div className="gear-card-body">
        <span className="gear-card-type">{item.type}</span>
        <span className="gear-card-brand">{item.brand}</span>
        <h3 className="gear-card-name">{item.name}</h3>
        <p className="gear-card-specs">{item.specs.join(' · ')}</p>
      </div>
    </div>
  );
}

function GearGroup({ title, items }: { title: string; items: GearItem[] }) {
  return (
    <div className="settings-group">
      <h2 className="peripherals-heading">{title}</h2>
      <div className="gear-grid">
        {items.map(item => (
          <GearCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function StatGroup({ title, stats }: { title: string; stats: Stat[] }) {
  return (
    <div className="settings-group">
      <h2 className="peripherals-heading">{title}</h2>
      <div className="settings-stats">
        {stats.map(stat => (
          <div className="settings-stat glass" key={stat.label}>
            <span className="settings-stat-label">{stat.label}</span>
            <span className="settings-stat-value">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Peripherals() {
  return (
    <section className="peripherals-page" aria-label="Peripheral settings">
      <StatGroup title="Mouse Settings" stats={MOUSE_STATS} />
      <GearGroup title="Peripherals" items={GEAR} />
      <GearGroup title="Wishlist" items={WISHLIST} />
    </section>
  );
}
