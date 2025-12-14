import { defineWidgetConfig } from "@medusajs/admin-sdk"

const TopbarLogoWidget = () => (
    <div style={{
        display: "flex",
        justifyContent: "center",
        padding: "16px",
        borderBottom: "1px solid #eaeaea",
        backgroundColor: "#fff"
    }}>
        <img
            src="/app/assets/prr_logo.png"
            alt="Logo"
            style={{
                maxHeight: "50px",
                maxWidth: "200px"
            }}
        />
    </div>
)

export const config = defineWidgetConfig({
    zone: [
        // Top of list pages
        "order.list.before",
        "customer.list.before",
        "product.list.before",
        "inventory_item.list.before",
        "price_list.list.before",
        "promotion.list.before",
        "campaign.list.before",

        // Top of detail pages
        "order.details.before",
        "customer.details.before",
        "product.details.before",

        // Login page
        "login.before",

        // Dashboard/Home (if available)
        // Note: There might not be a dashboard zone in your list
    ]
})

export default TopbarLogoWidget