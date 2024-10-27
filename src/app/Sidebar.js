import Link from 'next/link'

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <nav>
                <ul style={{ listStyle: "none" }}>
                    <li><Link href="/home"><t>Home</t></Link></li>
                    <li><a>Tasks</a></li>
                    <li><a>Messenger</a></li>
                    <li><a>Calendar</a></li>
                </ul>
            </nav>
        </aside>
    )
}