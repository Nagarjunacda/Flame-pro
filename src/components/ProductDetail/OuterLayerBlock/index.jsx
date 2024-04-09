import styles from './outerLayerBlock.module.css';

function OuterLayerBlock({ productInfo }) {
    const data = productInfo.filter((e) => e?.title === 'Outer Layers');
    const info = data.length > 0 ? data[0] : {};
    const outerLayerItems = info?.outer_layer_item;
    const headingsArr = ['Colour Availability', 'Outer Shell Tensile /Tear Strength', 'Radiant Heat TransferPerformance', 'BreathabilityPerformance', 'Lead Times', 'Notes']
    console.log(outerLayerItems, '!!')
    return <section>this is outer block</section>
}
export default OuterLayerBlock