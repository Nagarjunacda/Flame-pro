import { renderHTML } from '@/utils/htmlString';
import styles from './outerLayerBlock.module.css';

function OuterLayerBlock({ productInfo }) {
    const data = productInfo.filter((e) => e?.title === 'Outer Layers');
    const info = data.length > 0 ? data[0] : {};
    const outerLayerItems = info?.outer_layer_item;
    const headingsArr = ['', 'Colour Availability', 'Outer Shell Tensile/Tear Strength', 'Radiant Heat Transfer Performance', 'Breathability Performance', 'Lead Times', 'Notes'];

    return (
        <div className={styles.outerLayerTable}>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            {headingsArr.map((heading, index) => (
                                <th key={index}>{heading}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {outerLayerItems.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? styles.brownRow : ''}>
                                <td><u>{item.title_outer_layer}</u></td>
                                <td>{item.colour_availability}</td>
                                <td>{item.outer_shell_tensile__tear_strength}</td>
                                <td>{item.radiant_heat_transfer_performance}</td>
                                <td>{item.breathability_performance}</td>
                                <td>{renderHTML(item.lead_times)}</td>
                                <td>{item.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OuterLayerBlock;
