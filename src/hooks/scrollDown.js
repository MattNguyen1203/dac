export default function scrollDown(ref, block) {
    ref?.current?.scrollIntoView({
        block: block || 'center',
        inline: 'nearest'
    })
}