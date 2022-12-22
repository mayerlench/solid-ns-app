import { isIOS } from '@nativescript/core';
import { createSignal } from 'solid-js';
import Feed from '../../Feed';
import TabIcon from '../TabIcon/TabIcon';


export default () => {
    const [selectedIndex, setSelectedIndex] = createSignal(0)

    // TS const changeTab = (index: number) => setSelectedIndex(index)
    const changeTab = (index) => setSelectedIndex(index)

    return (
        <gridlayout rows="*, auto">
            <bottomnavigation
                selectedIndex={selectedIndex()}
                onSelectedIndexChanged={(args) => {
                    setSelectedIndex(args.newIndex);
                }}

            >
                <tabstrip>
                    <tabstripitem class="debug:bg-[#000316]" />
                    <tabstripitem class="debug:bg-[#000316]" />
                    <tabstripitem class="debug:bg-[#000316]" />
                </tabstrip>
                <tabcontentitem nodeRole="items">
                    <Feed />
                </tabcontentitem>
                <tabcontentitem nodeRole="items">
                    <gridlayout rows="auto,*" class="bg-transparent" >
                        <label
                            text="Likes"
                            class="text-3xl font-bold ml-8  mt-10"
                        />
                    </gridlayout>
                </tabcontentitem>
                <tabcontentitem nodeRole="items">
                    <gridlayout rows="auto,*" class="bg-transparent" >
                        <label
                            text="Settings"
                            class="text-3xl font-bold ml-8 mt-10"
                        />
                    </gridlayout>
                </tabcontentitem>
            </bottomnavigation>

            <contentview
                row={0}
                class="align-bottom bg-semi-gradient"
                height="20"
                opacity={.5}
            />

            <gridlayout className="pb-5" row={1} columns="*, *, *" rows='49' backgroundColor="#efefef">
                <gridlayout col={0} className="debug:bg-red-50/50" onTap={() => changeTab(0)}>
                    <TabIcon
                        className="w-[38]"
                        active={selectedIndex === 0}
                        image="https://img.icons8.com/fluency-systems-regular/344/search-in-list.png"
                        activeImage="https://img.icons8.com/fluency/344/search-in-list.png"
                    />
                </gridlayout>
                <gridlayout col={1} className="debug:bg-blue-50/50" onTap={() => changeTab(1)}>
                    <TabIcon
                        className="w-[32]"
                        active={selectedIndex() === 1}
                        image="https://img.icons8.com/fluency-systems-regular/344/heart-with-arrow.png"
                        activeImage="https://img.icons8.com/cotton/344/favorite-heart--v1.png"
                    />
                </gridlayout>
                <gridlayout col={2} className="debug:bg-yellow-50/50" onTap={() => changeTab(2)}>
                    <TabIcon
                        className="w-[32]"
                        active={selectedIndex() === 2}
                        image="https://img.icons8.com/sf-regular/344/gear.png"
                        activeImage="https://img.icons8.com/3d-fluency/344/gear--v2.png"
                    />
                </gridlayout>
            </gridlayout>
        </gridlayout>

    );
}
