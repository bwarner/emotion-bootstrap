import { css, injectGlobal } from "emotion";

export const btn = css`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    @media screen and (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }

    &:hover,
    &:focus {
        text-decoration: none;
    }

    &:focus,
    &.focus {
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &.disabled,
    &:disabled {
        opacity: 0.65;
    }

    &:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        background-image: none;
    }

    a&.disabled,
    fieldset:disabled a& {
        pointer-events: none;
    }

    & .${badge} {
        position: relative;
        top: -1px;
    }
`;

injectGlobal`
    /*!
 * Bootstrap v4.1.2 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
    :root {
        --blue: #007bff;
        --indigo: #6610f2;
        --purple: #6f42c1;
        --pink: #e83e8c;
        --red: #dc3545;
        --orange: #fd7e14;
        --yellow: #ffc107;
        --green: #28a745;
        --teal: #20c997;
        --cyan: #17a2b8;
        --white: #fff;
        --gray: #6c757d;
        --gray-dark: #343a40;
        --primary: #007bff;
        --secondary: #6c757d;
        --success: #28a745;
        --info: #17a2b8;
        --warning: #ffc107;
        --danger: #dc3545;
        --light: #f8f9fa;
        --dark: #343a40;
        --breakpoint-xs: 0;
        --breakpoint-sm: 576px;
        --breakpoint-md: 768px;
        --breakpoint-lg: 992px;
        --breakpoint-xl: 1200px;
        --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
            "Liberation Mono", "Courier New", monospace;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    html {
        font-family: sans-serif;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: scrollbar;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    @-ms-viewport {
        width: device-width;
    }

    article,
    aside,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    main,
    nav,
    section {
        display: block;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        text-align: left;
        background-color: #fff;
    }

    [tabindex="-1"]:focus {
        outline: 0 !important;
    }

    hr {
        box-sizing: content-box;
        height: 0;
        overflow: visible;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    abbr[title],
    abbr[data-original-title] {
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
        cursor: help;
        border-bottom: 0;
    }

    address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit;
    }

    ol,
    ul,
    dl {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
        margin-bottom: 0;
    }

    dt {
        font-weight: 700;
    }

    dd {
        margin-bottom: 0.5rem;
        margin-left: 0;
    }

    blockquote {
        margin: 0 0 1rem;
    }

    dfn {
        font-style: italic;
    }

    b,
    strong {
        font-weight: bolder;
    }

    small {
        font-size: 80%;
    }

    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    a {
        color: #007bff;
        text-decoration: none;
        background-color: transparent;
        -webkit-text-decoration-skip: objects;
    }

    a:hover {
        color: #0056b3;
        text-decoration: underline;
    }

    a:not([href]):not([tabindex]) {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):hover,
    a:not([href]):not([tabindex]):focus {
        color: inherit;
        text-decoration: none;
    }

    a:not([href]):not([tabindex]):focus {
        outline: 0;
    }

    pre,
    code,
    kbd,
    samp {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
            "Courier New", monospace;
        font-size: 1em;
    }

    pre {
        margin-top: 0;
        margin-bottom: 1rem;
        overflow: auto;
        -ms-overflow-style: scrollbar;
    }

    figure {
        margin: 0 0 1rem;
    }

    img {
        vertical-align: middle;
        border-style: none;
    }

    svg:not(:root) {
        overflow: hidden;
        vertical-align: middle;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: #6c757d;
        text-align: left;
        caption-side: bottom;
    }

    th {
        text-align: inherit;
    }

    label {
        display: inline-block;
        margin-bottom: 0.5rem;
    }

    button {
        border-radius: 0;
    }

    button:focus {
        outline: 1px dotted;
        outline: 5px auto -webkit-focus-ring-color;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button,
    input {
        overflow: visible;
    }

    button,
    select {
        text-transform: none;
    }

    button,
    html [type="button"],
    [type="reset"],
    [type="submit"] {
        -webkit-appearance: button;
    }

    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    input[type="radio"],
    input[type="checkbox"] {
        box-sizing: border-box;
        padding: 0;
    }

    input[type="date"],
    input[type="time"],
    input[type="datetime-local"],
    input[type="month"] {
        -webkit-appearance: listbox;
    }

    textarea {
        overflow: auto;
        resize: vertical;
    }

    fieldset {
        min-width: 0;
        padding: 0;
        margin: 0;
        border: 0;
    }

    legend {
        display: block;
        width: 100%;
        max-width: 100%;
        padding: 0;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        line-height: inherit;
        color: inherit;
        white-space: normal;
    }

    progress {
        vertical-align: baseline;
    }

    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
        height: auto;
    }

    [type="search"] {
        outline-offset: -2px;
        -webkit-appearance: none;
    }

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
    }

    output {
        display: inline-block;
    }

    summary {
        display: list-item;
        cursor: pointer;
    }

    template {
        display: none;
    }

    [hidden] {
        display: none !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        color: inherit;
    }

    h1 {
        font-size: 2.5rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1.5rem;
    }

    h5 {
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    hr {
        margin-top: 1rem;
        margin-bottom: 1rem;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    small {
        font-size: 80%;
        font-weight: 400;
    }

    mark {
        padding: 0.2em;
        background-color: #fcf8e3;
    }

    code {
        font-size: 87.5%;
        color: #e83e8c;
        word-break: break-word;
    }

    a > code {
        color: inherit;
    }

    kbd {
        padding: 0.2rem 0.4rem;
        font-size: 87.5%;
        color: #fff;
        background-color: #212529;
        border-radius: 0.2rem;
    }

    kbd kbd {
        padding: 0;
        font-size: 100%;
        font-weight: 700;
    }

    pre {
        display: block;
        font-size: 87.5%;
        color: #212529;
    }

    pre code {
        font-size: inherit;
        color: inherit;
        word-break: normal;
    }

    @-webkit-keyframes progress-bar-stripes {
        from {
            background-position: 1rem 0;
        }

        to {
            background-position: 0 0;
        }
    }

    @keyframes progress-bar-stripes {
        from {
            background-position: 1rem 0;
        }

        to {
            background-position: 0 0;
        }
    }

    @media print {
        *,
        *::before,
        *::after {
            text-shadow: none !important;
            box-shadow: none !important;
        }

        a:not(.${btn}) {
            text-decoration: underline;
        }

        abbr[title]::after {
            content: " (" attr(title) ")";
        }

        pre {
            white-space: pre-wrap !important;
        }

        pre,
        blockquote {
            border: 1px solid #adb5bd;
            page-break-inside: avoid;
        }

        thead {
            display: table-header-group;
        }

        tr,
        img {
            page-break-inside: avoid;
        }

        p,
        h2,
        h3 {
            orphans: 3;
            widows: 3;
        }

        h2,
        h3 {
            page-break-after: avoid;
        }

        @page {
            size: a3;
        }

        body {
            min-width: 992px !important;
        }
    }

    /*# sourceMappingURL=bootstrap.css.map */
`;

export const card = css`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    & > hr {
        margin-right: 0;
        margin-left: 0;
    }

    & > .${listGroup}:first-child .${listGroupItem}:first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    & > .${listGroup}:last-child .${listGroupItem}:last-child {
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }
`;

export const cardHeader = css`
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);

    &:first-child {
        border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
    }

    & + .${listGroup} .${listGroupItem}:first-child {
        border-top: 0;
    }
`;

export const accordion = css`
    & .${card}:not(:first-of-type):not(:last-of-type) {
        border-bottom: 0;
        border-radius: 0;
    }

    & .${card}:not(:first-of-type) .${cardHeader}:first-child {
        border-radius: 0;
    }

    & .${card}:first-of-type {
        border-bottom: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    & .${card}:last-of-type {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
`;

export const active = css`
    &.carousel-item-right {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        &.carousel-item-right {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }

    &.carousel-item-left {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        &.carousel-item-left {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }
`;

export const alert = css`
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
`;

export const alertLink = css`
    font-weight: 700;
`;

export const alertDanger = css`
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;

    & hr {
        border-top-color: #f1b0b7;
    }

    & .${alertLink} {
        color: #491217;
    }
`;

export const alertDark = css`
    color: #1b1e21;
    background-color: #d6d8d9;
    border-color: #c6c8ca;

    & hr {
        border-top-color: #b9bbbe;
    }

    & .${alertLink} {
        color: #040505;
    }
`;

export const close = css`
    float: right;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;

    &:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    &:not(:disabled):not(.disabled):hover,
    &:not(:disabled):not(.disabled):focus {
        color: #000;
        text-decoration: none;
        opacity: 0.75;
    }

    button& {
        padding: 0;
        background-color: transparent;
        border: 0;
        -webkit-appearance: none;
    }
`;

export const alertDismissible = css`
    padding-right: 4rem;

    & .${close} {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.75rem 1.25rem;
        color: inherit;
    }
`;

export const alertHeading = css`
    color: inherit;
`;

export const alertInfo = css`
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;

    & hr {
        border-top-color: #abdde5;
    }

    & .${alertLink} {
        color: #062c33;
    }
`;

export const alertLight = css`
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;

    & hr {
        border-top-color: #ececf6;
    }

    & .${alertLink} {
        color: #686868;
    }
`;

export const alertPrimary = css`
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;

    & hr {
        border-top-color: #9fcdff;
    }

    & .${alertLink} {
        color: #002752;
    }
`;

export const alertSecondary = css`
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;

    & hr {
        border-top-color: #c8cbcf;
    }

    & .${alertLink} {
        color: #202326;
    }
`;

export const alertSuccess = css`
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;

    & hr {
        border-top-color: #b1dfbb;
    }

    & .${alertLink} {
        color: #0b2e13;
    }
`;

export const alertWarning = css`
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffeeba;

    & hr {
        border-top-color: #ffe8a1;
    }

    & .${alertLink} {
        color: #533f03;
    }
`;

export const alignBaseline = css`
    vertical-align: baseline !important;
`;

export const alignBottom = css`
    vertical-align: bottom !important;
`;

export const alignContentAround = css`
    -ms-flex-line-pack: distribute !important;
    align-content: space-around !important;
`;

export const alignContentBetween = css`
    -ms-flex-line-pack: justify !important;
    align-content: space-between !important;
`;

export const alignContentCenter = css`
    -ms-flex-line-pack: center !important;
    align-content: center !important;
`;

export const alignContentEnd = css`
    -ms-flex-line-pack: end !important;
    align-content: flex-end !important;
`;

export const alignContentLgAround = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;

export const alignContentLgBetween = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;

export const alignContentLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;

export const alignContentLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;

export const alignContentLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;

export const alignContentLgStretch = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;

export const alignContentMdAround = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;

export const alignContentMdBetween = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;

export const alignContentMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;

export const alignContentMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;

export const alignContentMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;

export const alignContentMdStretch = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;

export const alignContentSmAround = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;

export const alignContentSmBetween = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;

export const alignContentSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;

export const alignContentSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;

export const alignContentSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;

export const alignContentSmStretch = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;

export const alignContentStart = css`
    -ms-flex-line-pack: start !important;
    align-content: flex-start !important;
`;

export const alignContentStretch = css`
    -ms-flex-line-pack: stretch !important;
    align-content: stretch !important;
`;

export const alignContentXlAround = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: distribute !important;
            align-content: space-around !important;
        }
    }
`;

export const alignContentXlBetween = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: justify !important;
            align-content: space-between !important;
        }
    }
`;

export const alignContentXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: center !important;
            align-content: center !important;
        }
    }
`;

export const alignContentXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: end !important;
            align-content: flex-end !important;
        }
    }
`;

export const alignContentXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: start !important;
            align-content: flex-start !important;
        }
    }
`;

export const alignContentXlStretch = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-line-pack: stretch !important;
            align-content: stretch !important;
        }
    }
`;

export const alignItemsBaseline = css`
    -ms-flex-align: baseline !important;
    align-items: baseline !important;
`;

export const alignItemsCenter = css`
    -ms-flex-align: center !important;
    align-items: center !important;
`;

export const alignItemsEnd = css`
    -ms-flex-align: end !important;
    align-items: flex-end !important;
`;

export const alignItemsLgBaseline = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;

export const alignItemsLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;

export const alignItemsLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;

export const alignItemsLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;

export const alignItemsLgStretch = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;

export const alignItemsMdBaseline = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;

export const alignItemsMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;

export const alignItemsMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;

export const alignItemsMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;

export const alignItemsMdStretch = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;

export const alignItemsSmBaseline = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;

export const alignItemsSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;

export const alignItemsSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;

export const alignItemsSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;

export const alignItemsSmStretch = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;

export const alignItemsStart = css`
    -ms-flex-align: start !important;
    align-items: flex-start !important;
`;

export const alignItemsStretch = css`
    -ms-flex-align: stretch !important;
    align-items: stretch !important;
`;

export const alignItemsXlBaseline = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: baseline !important;
            align-items: baseline !important;
        }
    }
`;

export const alignItemsXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: center !important;
            align-items: center !important;
        }
    }
`;

export const alignItemsXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: end !important;
            align-items: flex-end !important;
        }
    }
`;

export const alignItemsXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: start !important;
            align-items: flex-start !important;
        }
    }
`;

export const alignItemsXlStretch = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-align: stretch !important;
            align-items: stretch !important;
        }
    }
`;

export const alignMiddle = css`
    vertical-align: middle !important;
`;

export const alignSelfAuto = css`
    -ms-flex-item-align: auto !important;
    align-self: auto !important;
`;

export const alignSelfBaseline = css`
    -ms-flex-item-align: baseline !important;
    align-self: baseline !important;
`;

export const alignSelfCenter = css`
    -ms-flex-item-align: center !important;
    align-self: center !important;
`;

export const alignSelfEnd = css`
    -ms-flex-item-align: end !important;
    align-self: flex-end !important;
`;

export const alignSelfLgAuto = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;

export const alignSelfLgBaseline = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;

export const alignSelfLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;

export const alignSelfLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;

export const alignSelfLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;

export const alignSelfLgStretch = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;

export const alignSelfMdAuto = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;

export const alignSelfMdBaseline = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;

export const alignSelfMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;

export const alignSelfMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;

export const alignSelfMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;

export const alignSelfMdStretch = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;

export const alignSelfSmAuto = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;

export const alignSelfSmBaseline = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;

export const alignSelfSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;

export const alignSelfSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;

export const alignSelfSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;

export const alignSelfSmStretch = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;

export const alignSelfStart = css`
    -ms-flex-item-align: start !important;
    align-self: flex-start !important;
`;

export const alignSelfStretch = css`
    -ms-flex-item-align: stretch !important;
    align-self: stretch !important;
`;

export const alignSelfXlAuto = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: auto !important;
            align-self: auto !important;
        }
    }
`;

export const alignSelfXlBaseline = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: baseline !important;
            align-self: baseline !important;
        }
    }
`;

export const alignSelfXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: center !important;
            align-self: center !important;
        }
    }
`;

export const alignSelfXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: end !important;
            align-self: flex-end !important;
        }
    }
`;

export const alignSelfXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: start !important;
            align-self: flex-start !important;
        }
    }
`;

export const alignSelfXlStretch = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-item-align: stretch !important;
            align-self: stretch !important;
        }
    }
`;

export const alignTextBottom = css`
    vertical-align: text-bottom !important;
`;

export const alignTextTop = css`
    vertical-align: text-top !important;
`;

export const alignTop = css`
    vertical-align: top !important;
`;

export const badge = css`
    display: inline-block;
    padding: 0.25em 0.4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.25rem;

    &:empty {
        display: none;
    }

    @media print {
        & {
            border: 1px solid #000;
        }
    }
`;

export const badgeDanger = css`
    color: #fff;
    background-color: #dc3545;

    &[href]:hover,
    &[href]:focus {
        color: #fff;
        text-decoration: none;
        background-color: #bd2130;
    }
`;

export const badgeDark = css`
    color: #fff;
    background-color: #343a40;

    &[href]:hover,
    &[href]:focus {
        color: #fff;
        text-decoration: none;
        background-color: #1d2124;
    }
`;

export const badgeInfo = css`
    color: #fff;
    background-color: #17a2b8;

    &[href]:hover,
    &[href]:focus {
        color: #fff;
        text-decoration: none;
        background-color: #117a8b;
    }
`;

export const badgeLight = css`
    color: #212529;
    background-color: #f8f9fa;

    &[href]:hover,
    &[href]:focus {
        color: #212529;
        text-decoration: none;
        background-color: #dae0e5;
    }
`;

export const badgePill = css`
    padding-right: 0.6em;
    padding-left: 0.6em;
    border-radius: 10rem;
`;

export const badgePrimary = css`
    color: #fff;
    background-color: #007bff;

    &[href]:hover,
    &[href]:focus {
        color: #fff;
        text-decoration: none;
        background-color: #0062cc;
    }
`;

export const badgeSecondary = css`
    color: #fff;
    background-color: #6c757d;

    &[href]:hover,
    &[href]:focus {
        color: #fff;
        text-decoration: none;
        background-color: #545b62;
    }
`;

export const badgeSuccess = css`
    color: #fff;
    background-color: #28a745;

    &[href]:hover,
    &[href]:focus {
        color: #fff;
        text-decoration: none;
        background-color: #1e7e34;
    }
`;

export const badgeWarning = css`
    color: #212529;
    background-color: #ffc107;

    &[href]:hover,
    &[href]:focus {
        color: #212529;
        text-decoration: none;
        background-color: #d39e00;
    }
`;

export const bgDanger = css`
    background-color: #dc3545 !important;

    a&:hover,
    a&:focus,
    button&:hover,
    button&:focus {
        background-color: #bd2130 !important;
    }
`;

export const bgDark = css`
    background-color: #343a40 !important;

    a&:hover,
    a&:focus,
    button&:hover,
    button&:focus {
        background-color: #1d2124 !important;
    }
`;

export const bgInfo = css`
    background-color: #17a2b8 !important;

    a&:hover,
    a&:focus,
    button&:hover,
    button&:focus {
        background-color: #117a8b !important;
    }
`;

export const bgLight = css`
    background-color: #f8f9fa !important;

    a&:hover,
    a&:focus,
    button&:hover,
    button&:focus {
        background-color: #dae0e5 !important;
    }
`;

export const bgPrimary = css`
    background-color: #007bff !important;

    a&:hover,
    a&:focus,
    button&:hover,
    button&:focus {
        background-color: #0062cc !important;
    }
`;

export const bgSecondary = css`
    background-color: #6c757d !important;

    a&:hover,
    a&:focus,
    button&:hover,
    button&:focus {
        background-color: #545b62 !important;
    }
`;

export const bgSuccess = css`
    background-color: #28a745 !important;

    a&:hover,
    a&:focus,
    button&:hover,
    button&:focus {
        background-color: #1e7e34 !important;
    }
`;

export const bgTransparent = css`
    background-color: transparent !important;
`;

export const bgWarning = css`
    background-color: #ffc107 !important;

    a&:hover,
    a&:focus,
    button&:hover,
    button&:focus {
        background-color: #d39e00 !important;
    }
`;

export const bgWhite = css`
    background-color: #fff !important;
`;

export const blockquote = css`
    margin-bottom: 1rem;
    font-size: 1.25rem;
`;

export const blockquoteFooter = css`
    display: block;
    font-size: 80%;
    color: #6c757d;

    &::before {
        content: "\\2014 \\00A0";
    }
`;

export const border = css`
    border: 1px solid #dee2e6 !important;
`;

export const border0 = css`
    border: 0 !important;
`;

export const borderBottom = css`
    border-bottom: 1px solid #dee2e6 !important;
`;

export const borderBottom0 = css`
    border-bottom: 0 !important;
`;

export const borderDanger = css`
    border-color: #dc3545 !important;
`;

export const borderDark = css`
    border-color: #343a40 !important;
`;

export const borderInfo = css`
    border-color: #17a2b8 !important;
`;

export const borderLeft = css`
    border-left: 1px solid #dee2e6 !important;
`;

export const borderLeft0 = css`
    border-left: 0 !important;
`;

export const borderLight = css`
    border-color: #f8f9fa !important;
`;

export const borderPrimary = css`
    border-color: #007bff !important;
`;

export const borderRight = css`
    border-right: 1px solid #dee2e6 !important;
`;

export const borderRight0 = css`
    border-right: 0 !important;
`;

export const borderSecondary = css`
    border-color: #6c757d !important;
`;

export const borderSuccess = css`
    border-color: #28a745 !important;
`;

export const borderTop = css`
    border-top: 1px solid #dee2e6 !important;
`;

export const borderTop0 = css`
    border-top: 0 !important;
`;

export const borderWarning = css`
    border-color: #ffc107 !important;
`;

export const borderWhite = css`
    border-color: #fff !important;
`;

export const breadcrumb = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0.75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: 0.25rem;
`;

export const breadcrumbItem = css`
    & + & {
        padding-left: 0.5rem;
    }

    & + &::before {
        display: inline-block;
        padding-right: 0.5rem;
        color: #6c757d;
        content: "/";
    }

    & + &:hover::before {
        text-decoration: underline;
    }

    & + &:hover::before {
        text-decoration: none;
    }

    &.${active} {
        color: #6c757d;
    }
`;

export const popoverHeader = css`
    padding: 0.5rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    color: inherit;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);

    &:empty {
        display: none;
    }
`;

export const bsPopoverAuto = css`
    &[x-placement^="top"] {
        margin-bottom: 0.5rem;
    }

    &[x-placement^="top"] .arrow {
        bottom: calc((0.5rem + 1px) * -1);
    }

    &[x-placement^="top"] .arrow::before,
    &[x-placement^="top"] .arrow::after {
        border-width: 0.5rem 0.5rem 0;
    }

    &[x-placement^="top"] .arrow::before {
        bottom: 0;
        border-top-color: rgba(0, 0, 0, 0.25);
    }

    &[x-placement^="top"] .arrow::after {
        bottom: 1px;
        border-top-color: #fff;
    }

    &[x-placement^="right"] {
        margin-left: 0.5rem;
    }

    &[x-placement^="right"] .arrow {
        left: calc((0.5rem + 1px) * -1);
        width: 0.5rem;
        height: 1rem;
        margin: 0.3rem 0;
    }

    &[x-placement^="right"] .arrow::before,
    &[x-placement^="right"] .arrow::after {
        border-width: 0.5rem 0.5rem 0.5rem 0;
    }

    &[x-placement^="right"] .arrow::before {
        left: 0;
        border-right-color: rgba(0, 0, 0, 0.25);
    }

    &[x-placement^="right"] .arrow::after {
        left: 1px;
        border-right-color: #fff;
    }

    &[x-placement^="bottom"] {
        margin-top: 0.5rem;
    }

    &[x-placement^="bottom"] .arrow {
        top: calc((0.5rem + 1px) * -1);
    }

    &[x-placement^="bottom"] .arrow::before,
    &[x-placement^="bottom"] .arrow::after {
        border-width: 0 0.5rem 0.5rem 0.5rem;
    }

    &[x-placement^="bottom"] .arrow::before {
        top: 0;
        border-bottom-color: rgba(0, 0, 0, 0.25);
    }

    &[x-placement^="bottom"] .arrow::after {
        top: 1px;
        border-bottom-color: #fff;
    }

    &[x-placement^="bottom"] .${popoverHeader}::before {
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        width: 1rem;
        margin-left: -0.5rem;
        content: "";
        border-bottom: 1px solid #f7f7f7;
    }

    &[x-placement^="left"] {
        margin-right: 0.5rem;
    }

    &[x-placement^="left"] .arrow {
        right: calc((0.5rem + 1px) * -1);
        width: 0.5rem;
        height: 1rem;
        margin: 0.3rem 0;
    }

    &[x-placement^="left"] .arrow::before,
    &[x-placement^="left"] .arrow::after {
        border-width: 0.5rem 0 0.5rem 0.5rem;
    }

    &[x-placement^="left"] .arrow::before {
        right: 0;
        border-left-color: rgba(0, 0, 0, 0.25);
    }

    &[x-placement^="left"] .arrow::after {
        right: 1px;
        border-left-color: #fff;
    }
`;

export const bsPopoverBottom = css`
    margin-top: 0.5rem;

    & .arrow {
        top: calc((0.5rem + 1px) * -1);
    }

    & .arrow::before,
    & .arrow::after {
        border-width: 0 0.5rem 0.5rem 0.5rem;
    }

    & .arrow::before {
        top: 0;
        border-bottom-color: rgba(0, 0, 0, 0.25);
    }

    & .arrow::after {
        top: 1px;
        border-bottom-color: #fff;
    }

    & .${popoverHeader}::before {
        position: absolute;
        top: 0;
        left: 50%;
        display: block;
        width: 1rem;
        margin-left: -0.5rem;
        content: "";
        border-bottom: 1px solid #f7f7f7;
    }
`;

export const bsPopoverLeft = css`
    margin-right: 0.5rem;

    & .arrow {
        right: calc((0.5rem + 1px) * -1);
        width: 0.5rem;
        height: 1rem;
        margin: 0.3rem 0;
    }

    & .arrow::before,
    & .arrow::after {
        border-width: 0.5rem 0 0.5rem 0.5rem;
    }

    & .arrow::before {
        right: 0;
        border-left-color: rgba(0, 0, 0, 0.25);
    }

    & .arrow::after {
        right: 1px;
        border-left-color: #fff;
    }
`;

export const bsPopoverRight = css`
    margin-left: 0.5rem;

    & .arrow {
        left: calc((0.5rem + 1px) * -1);
        width: 0.5rem;
        height: 1rem;
        margin: 0.3rem 0;
    }

    & .arrow::before,
    & .arrow::after {
        border-width: 0.5rem 0.5rem 0.5rem 0;
    }

    & .arrow::before {
        left: 0;
        border-right-color: rgba(0, 0, 0, 0.25);
    }

    & .arrow::after {
        left: 1px;
        border-right-color: #fff;
    }
`;

export const bsPopoverTop = css`
    margin-bottom: 0.5rem;

    & .arrow {
        bottom: calc((0.5rem + 1px) * -1);
    }

    & .arrow::before,
    & .arrow::after {
        border-width: 0.5rem 0.5rem 0;
    }

    & .arrow::before {
        bottom: 0;
        border-top-color: rgba(0, 0, 0, 0.25);
    }

    & .arrow::after {
        bottom: 1px;
        border-top-color: #fff;
    }
`;

export const bsTooltipAuto = css`
    &[x-placement^="top"] {
        padding: 0.4rem 0;
    }

    &[x-placement^="top"] .arrow {
        bottom: 0;
    }

    &[x-placement^="top"] .arrow::before {
        top: 0;
        border-width: 0.4rem 0.4rem 0;
        border-top-color: #000;
    }

    &[x-placement^="right"] {
        padding: 0 0.4rem;
    }

    &[x-placement^="right"] .arrow {
        left: 0;
        width: 0.4rem;
        height: 0.8rem;
    }

    &[x-placement^="right"] .arrow::before {
        right: 0;
        border-width: 0.4rem 0.4rem 0.4rem 0;
        border-right-color: #000;
    }

    &[x-placement^="bottom"] {
        padding: 0.4rem 0;
    }

    &[x-placement^="bottom"] .arrow {
        top: 0;
    }

    &[x-placement^="bottom"] .arrow::before {
        bottom: 0;
        border-width: 0 0.4rem 0.4rem;
        border-bottom-color: #000;
    }

    &[x-placement^="left"] {
        padding: 0 0.4rem;
    }

    &[x-placement^="left"] .arrow {
        right: 0;
        width: 0.4rem;
        height: 0.8rem;
    }

    &[x-placement^="left"] .arrow::before {
        left: 0;
        border-width: 0.4rem 0 0.4rem 0.4rem;
        border-left-color: #000;
    }
`;

export const bsTooltipBottom = css`
    padding: 0.4rem 0;

    & .arrow {
        top: 0;
    }

    & .arrow::before {
        bottom: 0;
        border-width: 0 0.4rem 0.4rem;
        border-bottom-color: #000;
    }
`;

export const bsTooltipLeft = css`
    padding: 0 0.4rem;

    & .arrow {
        right: 0;
        width: 0.4rem;
        height: 0.8rem;
    }

    & .arrow::before {
        left: 0;
        border-width: 0.4rem 0 0.4rem 0.4rem;
        border-left-color: #000;
    }
`;

export const bsTooltipRight = css`
    padding: 0 0.4rem;

    & .arrow {
        left: 0;
        width: 0.4rem;
        height: 0.8rem;
    }

    & .arrow::before {
        right: 0;
        border-width: 0.4rem 0.4rem 0.4rem 0;
        border-right-color: #000;
    }
`;

export const bsTooltipTop = css`
    padding: 0.4rem 0;

    & .arrow {
        bottom: 0;
    }

    & .arrow::before {
        top: 0;
        border-width: 0.4rem 0.4rem 0;
        border-top-color: #000;
    }
`;

export const btnBlock = css`
    display: block;
    width: 100%;

    & + & {
        margin-top: 0.5rem;
    }

    input[type="submit"]&,
    input[type="reset"]&,
    input[type="button"]& {
        width: 100%;
    }
`;

export const btnDanger = css`
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;

    &:hover {
        color: #fff;
        background-color: #c82333;
        border-color: #bd2130;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #bd2130;
        border-color: #b21f2d;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }
`;

export const btnDark = css`
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;

    &:hover {
        color: #fff;
        background-color: #23272b;
        border-color: #1d2124;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #1d2124;
        border-color: #171a1d;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }
`;

export const dropdownToggle = css`
    &::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.3em solid;
        border-right: 0.3em solid transparent;
        border-bottom: 0;
        border-left: 0.3em solid transparent;
    }

    &:empty::after {
        margin-left: 0;
    }
`;

export const btnGroup = css`
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;


& > .${btn} {
  position: relative;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
}

& > .${btn}:hover {
  z-index: 1;
}

& > .${btn}:focus, & > .${btn}:active, & > .${btn}.${active} {
  z-index: 1;
}

& .${btn} + .${btn}, & .${btn} + &, & & + .${btn}, & & + & {
  margin-left: -1px;
}

& > .${btn}:first-child {
  margin-left: 0;
}

& > .${btn}:not(:last-child):not(.${dropdownToggle}), & > &:not(:last-child) > .${btn} {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

& > .${btn}:not(:first-child), & > &:not(:first-child) > .${btn} {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

`;

export const dropdownToggleSplit = css`
    padding-right: 0.5625rem;
    padding-left: 0.5625rem;

    &::after {
        margin-left: 0;
    }
`;

export const btnGroupLg = css`
    & > .${btn} {
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        line-height: 1.5;
        border-radius: 0.3rem;
    }

    & > .${btn} + .${dropdownToggleSplit} {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
    }
`;

export const btnGroupSm = css`
    & > .${btn} {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
        border-radius: 0.2rem;
    }

    & > .${btn} + .${dropdownToggleSplit} {
        padding-right: 0.375rem;
        padding-left: 0.375rem;
    }
`;

export const btnGroupToggle = css`
    & > .${btn}, & > .${btnGroup} > .${btn} {
        margin-bottom: 0;
    }

    & > .${btn} input[type="radio"],
    & > .${btn} input[type="checkbox"],
    & > .${btnGroup} > .${btn} input[type="radio"],
    & > .${btnGroup} > .${btn} input[type="checkbox"] {
        position: absolute;
        clip: rect(0, 0, 0, 0);
        pointer-events: none;
    }
`;

export const btnGroupVertical = css`
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;


& > .${btn} {
  position: relative;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
}

& > .${btn}:hover {
  z-index: 1;
}

& > .${btn}:focus, & > .${btn}:active, & > .${btn}.${active} {
  z-index: 1;
}

& .${btn} + .${btn}, & .${btn} + .${btnGroup}, & .${btnGroup} + .${btn}, & .${btnGroup} + .${btnGroup} {
  margin-left: -1px;
}


  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: start;
  align-items: flex-start;
  -ms-flex-pack: center;
  justify-content: center;


& .${btn}, & .${btnGroup} {
  width: 100%;
}

& > .${btn} + .${btn}, & > .${btn} + .${btnGroup}, & > .${btnGroup} + .${btn}, & > .${btnGroup} + .${btnGroup} {
  margin-top: -1px;
  margin-left: 0;
}

& > .${btn}:not(:last-child):not(.${dropdownToggle}), & > .${btnGroup}:not(:last-child) > .${btn} {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

& > .${btn}:not(:first-child), & > .${btnGroup}:not(:first-child) > .${btn} {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

`;

export const btnInfo = css`
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;

    &:hover {
        color: #fff;
        background-color: #138496;
        border-color: #117a8b;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #117a8b;
        border-color: #10707f;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }
`;

export const btnLg = css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;

    & + .${dropdownToggleSplit} {
        padding-right: 0.75rem;
        padding-left: 0.75rem;
    }
`;

export const btnLight = css`
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;

    &:hover {
        color: #212529;
        background-color: #e2e6ea;
        border-color: #dae0e5;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #212529;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #212529;
        background-color: #dae0e5;
        border-color: #d3d9df;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }
`;

export const btnLink = css`
    font-weight: 400;
    color: #007bff;
    background-color: transparent;

    &:hover {
        color: #0056b3;
        text-decoration: underline;
        background-color: transparent;
        border-color: transparent;
    }

    &:focus,
    &.focus {
        text-decoration: underline;
        border-color: transparent;
        box-shadow: none;
    }

    &:disabled,
    &.disabled {
        color: #6c757d;
        pointer-events: none;
    }
`;

export const btnOutlineDanger = css`
    color: #dc3545;
    background-color: transparent;
    background-image: none;
    border-color: #dc3545;

    &:hover {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #dc3545;
        background-color: transparent;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #dc3545;
        border-color: #dc3545;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
    }
`;

export const btnOutlineDark = css`
    color: #343a40;
    background-color: transparent;
    background-image: none;
    border-color: #343a40;

    &:hover {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #343a40;
        background-color: transparent;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #343a40;
        border-color: #343a40;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
    }
`;

export const btnOutlineInfo = css`
    color: #17a2b8;
    background-color: transparent;
    background-image: none;
    border-color: #17a2b8;

    &:hover {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #17a2b8;
        background-color: transparent;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
    }
`;

export const btnOutlineLight = css`
    color: #f8f9fa;
    background-color: transparent;
    background-image: none;
    border-color: #f8f9fa;

    &:hover {
        color: #212529;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #f8f9fa;
        background-color: transparent;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #212529;
        background-color: #f8f9fa;
        border-color: #f8f9fa;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
    }
`;

export const btnOutlinePrimary = css`
    color: #007bff;
    background-color: transparent;
    background-image: none;
    border-color: #007bff;

    &:hover {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #007bff;
        background-color: transparent;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
`;

export const btnOutlineSecondary = css`
    color: #6c757d;
    background-color: transparent;
    background-image: none;
    border-color: #6c757d;

    &:hover {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #6c757d;
        background-color: transparent;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
`;

export const btnOutlineSuccess = css`
    color: #28a745;
    background-color: transparent;
    background-image: none;
    border-color: #28a745;

    &:hover {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #28a745;
        background-color: transparent;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }
`;

export const btnOutlineWarning = css`
    color: #ffc107;
    background-color: transparent;
    background-image: none;
    border-color: #ffc107;

    &:hover {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #ffc107;
        background-color: transparent;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }
`;

export const btnPrimary = css`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;

    &:hover {
        color: #fff;
        background-color: #0069d9;
        border-color: #0062cc;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #0062cc;
        border-color: #005cbf;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
    }
`;

export const btnSecondary = css`
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;

    &:hover {
        color: #fff;
        background-color: #5a6268;
        border-color: #545b62;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #545b62;
        border-color: #4e555b;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
    }
`;

export const btnSm = css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;

    & + .${dropdownToggleSplit} {
        padding-right: 0.375rem;
        padding-left: 0.375rem;
    }
`;

export const btnSuccess = css`
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;

    &:hover {
        color: #fff;
        background-color: #218838;
        border-color: #1e7e34;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #fff;
        background-color: #28a745;
        border-color: #28a745;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #fff;
        background-color: #1e7e34;
        border-color: #1c7430;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
    }
`;

export const inputGroup = css`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;

    & > .${formControl}, & > .${customSelect}, & > .${customFile} {
        position: relative;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        width: 1%;
        margin-bottom: 0;
    }

    &
        > .${formControl}
        + .${formControl},
        &
        > .${formControl}
        + .${customSelect},
        &
        > .${formControl}
        + .${customFile},
        &
        > .${customSelect}
        + .${formControl},
        &
        > .${customSelect}
        + .${customSelect},
        &
        > .${customSelect}
        + .${customFile},
        &
        > .${customFile}
        + .${formControl},
        &
        > .${customFile}
        + .${customSelect},
        &
        > .${customFile}
        + .${customFile} {
        margin-left: -1px;
    }

    &
        > .${formControl}:focus,
        &
        > .${customSelect}:focus,
        &
        > .${customFile}
        .${customFileInput}:focus
        ~ .${customFileLabel} {
        z-index: 3;
    }

    & > .${formControl}:not(:last-child),
    & > .${customSelect}:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & > .${formControl}:not(:first-child),
    & > .${customSelect}:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    & > .${customFile} {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-align: center;
        align-items: center;
    }

    &
        > .${customFile}:not(:last-child)
        .${customFileLabel},
        &
        > .${customFile}:not(:last-child)
        .${customFileLabel}::after {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    & > .${customFile}:not(:first-child) .${customFileLabel} {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    &
        > .${inputGroupPrepend}
        > .${btn},
        &
        > .${inputGroupPrepend}
        > .${inputGroupText},
        &
        > .${inputGroupAppend}:not(:last-child)
        > .${btn},
        &
        > .${inputGroupAppend}:not(:last-child)
        > .${inputGroupText},
        &
        > .${inputGroupAppend}:last-child
        > .${btn}:not(:last-child):not(.${dropdownToggle}),
    & > .${inputGroupAppend}:last-child > .${inputGroupText}:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &
        > .${inputGroupAppend}
        > .${btn},
        &
        > .${inputGroupAppend}
        > .${inputGroupText},
        &
        > .${inputGroupPrepend}:not(:first-child)
        > .${btn},
        &
        > .${inputGroupPrepend}:not(:first-child)
        > .${inputGroupText},
        &
        > .${inputGroupPrepend}:first-child
        > .${btn}:not(:first-child),
    &
        > .${inputGroupPrepend}:first-child
        > .${inputGroupText}:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

export const btnToolbar = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-pack: start;
    justify-content: flex-start;

    & .${inputGroup} {
        width: auto;
    }
`;

export const btnWarning = css`
    color: #212529;
    background-color: #ffc107;
    border-color: #ffc107;

    &:hover {
        color: #212529;
        background-color: #e0a800;
        border-color: #d39e00;
    }

    &:focus,
    &.focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }

    &.disabled,
    &:disabled {
        color: #212529;
        background-color: #ffc107;
        border-color: #ffc107;
    }

    &:not(:disabled):not(.disabled):active,
    &:not(:disabled):not(.disabled).${active} {
        color: #212529;
        background-color: #d39e00;
        border-color: #c69500;
    }

    &:not(:disabled):not(.disabled):active:focus,
    &:not(:disabled):not(.disabled).${active}:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
    }
`;

export const listGroup = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
`;

export const listGroupItem = css`
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);

    &:first-child {
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
    }

    &:last-child {
        margin-bottom: 0;
        border-bottom-right-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    &:hover,
    &:focus {
        z-index: 1;
        text-decoration: none;
    }

    &.disabled,
    &:disabled {
        color: #6c757d;
        background-color: #fff;
    }

    &.${active} {
        z-index: 2;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }
`;

export const cardBody = css`
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
`;

export const cardColumns = css`
    & .${card} {
        margin-bottom: 0.75rem;
    }

    @media (min-width: 576px) {
        & {
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            -webkit-column-gap: 1.25rem;
            -moz-column-gap: 1.25rem;
            column-gap: 1.25rem;
            orphans: 1;
            widows: 1;
        }

        & .${card} {
            display: inline-block;
            width: 100%;
        }
    }
`;

export const cardDeck = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;

    & .${card} {
        margin-bottom: 15px;
    }

    @media (min-width: 576px) {
        & {
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            margin-right: -15px;
            margin-left: -15px;
        }

        & .${card} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex: 1 0 0%;
            flex: 1 0 0%;
            -ms-flex-direction: column;
            flex-direction: column;
            margin-right: 15px;
            margin-bottom: 0;
            margin-left: 15px;
        }
    }
`;

export const cardFooter = css`
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);

    &:last-child {
        border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
    }
`;

export const cardImgTop = css`
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
`;

export const cardImgBottom = css`
    width: 100%;
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
`;

export const cardGroup = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;

    & > .${card} {
        margin-bottom: 15px;
    }

    @media (min-width: 576px) {
        & {
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
        }

        & > .${card} {
            -ms-flex: 1 0 0%;
            flex: 1 0 0%;
            margin-bottom: 0;
        }

        & > .${card} + .${card} {
            margin-left: 0;
            border-left: 0;
        }

        & > .${card}:first-child {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        &
            > .${card}:first-child
            .${cardImgTop},
            &
            > .${card}:first-child
            .${cardHeader} {
            border-top-right-radius: 0;
        }

        &
            > .${card}:first-child
            .${cardImgBottom},
            &
            > .${card}:first-child
            .${cardFooter} {
            border-bottom-right-radius: 0;
        }

        & > .${card}:last-child {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }

        &
            > .${card}:last-child
            .${cardImgTop},
            &
            > .${card}:last-child
            .${cardHeader} {
            border-top-left-radius: 0;
        }

        &
            > .${card}:last-child
            .${cardImgBottom},
            &
            > .${card}:last-child
            .${cardFooter} {
            border-bottom-left-radius: 0;
        }

        & > .${card}:only-child {
            border-radius: 0.25rem;
        }

        &
            > .${card}:only-child
            .${cardImgTop},
            &
            > .${card}:only-child
            .${cardHeader} {
            border-top-left-radius: 0.25rem;
            border-top-right-radius: 0.25rem;
        }

        &
            > .${card}:only-child
            .${cardImgBottom},
            &
            > .${card}:only-child
            .${cardFooter} {
            border-bottom-right-radius: 0.25rem;
            border-bottom-left-radius: 0.25rem;
        }

        & > .${card}:not(:first-child):not(:last-child):not(:only-child) {
            border-radius: 0;
        }

        &
            > .${card}:not(:first-child):not(:last-child):not(:only-child)
            .${cardImgTop},
            &
            > .${card}:not(:first-child):not(:last-child):not(:only-child)
            .${cardImgBottom},
            &
            > .${card}:not(:first-child):not(:last-child):not(:only-child)
            .${cardHeader},
            &
            > .${card}:not(:first-child):not(:last-child):not(:only-child)
            .${cardFooter} {
            border-radius: 0;
        }
    }
`;

export const cardHeaderPills = css`
    margin-right: -0.625rem;
    margin-left: -0.625rem;
`;

export const cardHeaderTabs = css`
    margin-right: -0.625rem;
    margin-bottom: -0.75rem;
    margin-left: -0.625rem;
    border-bottom: 0;
`;

export const cardImg = css`
    width: 100%;
    border-radius: calc(0.25rem - 1px);
`;

export const cardImgOverlay = css`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
`;

export const cardLink = css`
    &:hover {
        text-decoration: none;
    }

    & + & {
        margin-left: 1.25rem;
    }
`;

export const cardSubtitle = css`
    margin-top: -0.375rem;
    margin-bottom: 0;
`;

export const cardText = css`
    &:last-child {
        margin-bottom: 0;
    }
`;

export const cardTitle = css`
    margin-bottom: 0.75rem;
`;

export const carousel = css`
    position: relative;
`;

export const carouselCaption = css`
    position: absolute;
    right: 15%;
    bottom: 20px;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    color: #fff;
    text-align: center;
`;

export const carouselControlNext = css`
    position: absolute;
    top: 0;
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: 0.5;

    &:hover,
    &:focus {
        color: #fff;
        text-decoration: none;
        outline: 0;
        opacity: 0.9;
    }

    right: 0;
`;

export const carouselControlNextIcon = css`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
`;

export const carouselControlPrev = css`
    position: absolute;
    top: 0;
    bottom: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 15%;
    color: #fff;
    text-align: center;
    opacity: 0.5;

    &:hover,
    &:focus {
        color: #fff;
        text-decoration: none;
        outline: 0;
        opacity: 0.9;
    }

    left: 0;
`;

export const carouselControlPrevIcon = css`
    display: inline-block;
    width: 20px;
    height: 20px;
    background: transparent no-repeat center center;
    background-size: 100% 100%;

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
`;

export const carouselItem = css`
    position: relative;
    display: none;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000px;
    perspective: 1000px;

    &.${active} {
        display: block;
        transition: -webkit-transform 0.6s ease;
        transition: transform 0.6s ease;
        transition: transform 0.6s ease, -webkit-transform 0.6s ease;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        &.${active} {
            transition: none;
        }
    }
`;

export const carouselItemNext = css`
    display: block;
    transition: -webkit-transform 0.6s ease;
    transition: transform 0.6s ease;
    transition: transform 0.6s ease, -webkit-transform 0.6s ease;

    @media screen and (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }

    position: absolute;
    top: 0;

    &.carousel-item-left {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        &.carousel-item-left {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    -webkit-transform: translateX(100%);
    transform: translateX(100%);

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        & {
            -webkit-transform: translate3d(100%, 0, 0);
            transform: translate3d(100%, 0, 0);
        }
    }
`;

export const carouselItemPrev = css`
    display: block;
    transition: -webkit-transform 0.6s ease;
    transition: transform 0.6s ease;
    transition: transform 0.6s ease, -webkit-transform 0.6s ease;

    @media screen and (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }

    position: absolute;
    top: 0;

    &.carousel-item-right {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        &.carousel-item-right {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);

    @supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
        & {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }
`;

export const carouselFade = css`& .${carouselItem} {
  opacity: 0;
  transition-duration: .6s;
  transition-property: opacity;
}

& .${carouselItem}.${active}, & .${carouselItemNext}.carousel-item-left, & .${carouselItemPrev}.carousel-item-right {
  opacity: 1;
}

& .${active}.carousel-item-left, & .${active}.carousel-item-right {
  opacity: 0;
}

& .${carouselItemNext}, & .${carouselItemPrev}, & .${carouselItem}.${active}, & .${active}.carousel-item-left, & .${active}.${carouselItemPrev} {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {
  & .${carouselItemNext}, & .${carouselItemPrev}, & .${carouselItem}.${active}, & .${active}.carousel-item-left, & .${active}.${carouselItemPrev} {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }


}

`;

export const carouselIndicators = css`
    position: absolute;
    right: 0;
    bottom: 10px;
    left: 0;
    z-index: 15;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: 0;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;

    & li {
        position: relative;
        -ms-flex: 0 1 auto;
        flex: 0 1 auto;
        width: 30px;
        height: 3px;
        margin-right: 3px;
        margin-left: 3px;
        text-indent: -999px;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.5);
    }

    & li::before {
        position: absolute;
        top: -10px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 10px;
        content: "";
    }

    & li::after {
        position: absolute;
        bottom: -10px;
        left: 0;
        display: inline-block;
        width: 100%;
        height: 10px;
        content: "";
    }

    & .${active} {
        background-color: #fff;
    }
`;

export const carouselInner = css`
    position: relative;
    width: 100%;
    overflow: hidden;
`;

export const clearfix = css`
    &::after {
        display: block;
        clear: both;
        content: "";
    }
`;

export const col = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
`;

export const col1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 8.333333%;
    flex: 0 0 8.333333%;
    max-width: 8.333333%;
`;

export const col2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 16.666667%;
    flex: 0 0 16.666667%;
    max-width: 16.666667%;
`;

export const col3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
`;

export const col4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
`;

export const col5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 41.666667%;
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
`;

export const col6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const col7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 58.333333%;
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
`;

export const col8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 66.666667%;
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
`;

export const col9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
`;

export const col10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 83.333333%;
    flex: 0 0 83.333333%;
    max-width: 83.333333%;
`;

export const col11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 91.666667%;
    flex: 0 0 91.666667%;
    max-width: 91.666667%;
`;

export const col12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
`;

export const colAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: auto;
    max-width: none;
`;

export const colFormLabel = css`
    padding-top: calc(0.375rem + 1px);
    padding-bottom: calc(0.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
`;

export const colFormLabelLg = css`
    padding-top: calc(0.5rem + 1px);
    padding-bottom: calc(0.5rem + 1px);
    font-size: 1.25rem;
    line-height: 1.5;
`;

export const colFormLabelSm = css`
    padding-top: calc(0.25rem + 1px);
    padding-bottom: calc(0.25rem + 1px);
    font-size: 0.875rem;
    line-height: 1.5;
`;

export const colLg = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
    }
`;

export const colLg1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
    }
`;

export const colLg2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
    }
`;

export const colLg3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
`;

export const colLg4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
`;

export const colLg5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
    }
`;

export const colLg6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
`;

export const colLg7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
    }
`;

export const colLg8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
    }
`;

export const colLg9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
`;

export const colLg10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
    }
`;

export const colLg11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
    }
`;

export const colLg12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

export const colLgAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
        & {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
    }
`;

export const colMd = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
    }
`;

export const colMd1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
    }
`;

export const colMd2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
    }
`;

export const colMd3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
`;

export const colMd4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
`;

export const colMd5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
    }
`;

export const colMd6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
`;

export const colMd7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
    }
`;

export const colMd8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
    }
`;

export const colMd9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
`;

export const colMd10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
    }
`;

export const colMd11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
    }
`;

export const colMd12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

export const colMdAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px) {
        & {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
    }
`;

export const colSm = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
    }
`;

export const colSm1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
    }
`;

export const colSm2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
    }
`;

export const colSm3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
`;

export const colSm4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
`;

export const colSm5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
    }
`;

export const colSm6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
`;

export const colSm7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
    }
`;

export const colSm8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
    }
`;

export const colSm9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
`;

export const colSm10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
    }
`;

export const colSm11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
    }
`;

export const colSm12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

export const colSmAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 576px) {
        & {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
    }
`;

export const colXl = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex-preferred-size: 0;
            flex-basis: 0;
            -ms-flex-positive: 1;
            flex-grow: 1;
            max-width: 100%;
        }
    }
`;

export const colXl1 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 8.333333%;
            flex: 0 0 8.333333%;
            max-width: 8.333333%;
        }
    }
`;

export const colXl2 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 16.666667%;
            flex: 0 0 16.666667%;
            max-width: 16.666667%;
        }
    }
`;

export const colXl3 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
`;

export const colXl4 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 33.333333%;
            flex: 0 0 33.333333%;
            max-width: 33.333333%;
        }
    }
`;

export const colXl5 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 41.666667%;
            flex: 0 0 41.666667%;
            max-width: 41.666667%;
        }
    }
`;

export const colXl6 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 50%;
            flex: 0 0 50%;
            max-width: 50%;
        }
    }
`;

export const colXl7 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 58.333333%;
            flex: 0 0 58.333333%;
            max-width: 58.333333%;
        }
    }
`;

export const colXl8 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 66.666667%;
            flex: 0 0 66.666667%;
            max-width: 66.666667%;
        }
    }
`;

export const colXl9 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 75%;
            flex: 0 0 75%;
            max-width: 75%;
        }
    }
`;

export const colXl10 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 83.333333%;
            flex: 0 0 83.333333%;
            max-width: 83.333333%;
        }
    }
`;

export const colXl11 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 91.666667%;
            flex: 0 0 91.666667%;
            max-width: 91.666667%;
        }
    }
`;

export const colXl12 = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 100%;
            flex: 0 0 100%;
            max-width: 100%;
        }
    }
`;

export const colXlAuto = css`
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 1200px) {
        & {
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            width: auto;
            max-width: none;
        }
    }
`;

export const show = css`& > .${btnPrimary}.${dropdownToggle} {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf;
}

& > .${btnPrimary}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

& > .${btnSecondary}.${dropdownToggle} {
  color: #fff;
  background-color: #545b62;
  border-color: #4e555b;
}

& > .${btnSecondary}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

& > .${btnSuccess}.${dropdownToggle} {
  color: #fff;
  background-color: #1e7e34;
  border-color: #1c7430;
}

& > .${btnSuccess}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

& > .${btnInfo}.${dropdownToggle} {
  color: #fff;
  background-color: #117a8b;
  border-color: #10707f;
}

& > .${btnInfo}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

& > .${btnWarning}.${dropdownToggle} {
  color: #212529;
  background-color: #d39e00;
  border-color: #c69500;
}

& > .${btnWarning}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

& > .${btnDanger}.${dropdownToggle} {
  color: #fff;
  background-color: #bd2130;
  border-color: #b21f2d;
}

& > .${btnDanger}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

& > .${btnLight}.${dropdownToggle} {
  color: #212529;
  background-color: #dae0e5;
  border-color: #d3d9df;
}

& > .${btnLight}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

& > .${btnDark}.${dropdownToggle} {
  color: #fff;
  background-color: #1d2124;
  border-color: #171a1d;
}

& > .${btnDark}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

& > .${btnOutlinePrimary}.${dropdownToggle} {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

& > .${btnOutlinePrimary}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

& > .${btnOutlineSecondary}.${dropdownToggle} {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}

& > .${btnOutlineSecondary}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);
}

& > .${btnOutlineSuccess}.${dropdownToggle} {
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
}

& > .${btnOutlineSuccess}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);
}

& > .${btnOutlineInfo}.${dropdownToggle} {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}

& > .${btnOutlineInfo}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
}

& > .${btnOutlineWarning}.${dropdownToggle} {
  color: #212529;
  background-color: #ffc107;
  border-color: #ffc107;
}

& > .${btnOutlineWarning}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);
}

& > .${btnOutlineDanger}.${dropdownToggle} {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}

& > .${btnOutlineDanger}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);
}

& > .${btnOutlineLight}.${dropdownToggle} {
  color: #212529;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}

& > .${btnOutlineLight}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);
}

& > .${btnOutlineDark}.${dropdownToggle} {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}

& > .${btnOutlineDark}.${dropdownToggle}:focus {
  box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);
}

`;

export const collapse = css`
    &:not(.${show}) {
        display: none;
    }
`;

export const collapsing = css`
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height 0.35s ease;

    @media screen and (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }
`;

export const container = css`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
        & {
            max-width: 540px;
        }
    }

    @media (min-width: 768px) {
        & {
            max-width: 720px;
        }
    }

    @media (min-width: 992px) {
        & {
            max-width: 960px;
        }
    }

    @media (min-width: 1200px) {
        & {
            max-width: 1140px;
        }
    }

    @media print {
        & {
            min-width: 992px !important;
        }
    }
`;

export const containerFluid = css`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const customControlLabel = css`
    position: relative;
    margin-bottom: 0;

    &::before {
        position: absolute;
        top: 0.25rem;
        left: -1.5rem;
        display: block;
        width: 1rem;
        height: 1rem;
        pointer-events: none;
        content: "";
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: #dee2e6;
    }

    &::after {
        position: absolute;
        top: 0.25rem;
        left: -1.5rem;
        display: block;
        width: 1rem;
        height: 1rem;
        content: "";
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    &::before {
        transition: background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        &::before {
            transition: none;
        }
    }
`;

export const customControlInput = css`
    &.is-valid ~ .${customControlLabel} {
        color: #28a745;
    }

    &.is-valid ~ .${customControlLabel}::before {
        background-color: #71dd8a;
    }

    &.is-valid ~ .${validFeedback}, &.is-valid ~ .${validTooltip} {
        display: block;
    }

    &.is-valid:checked ~ .${customControlLabel}::before {
        background-color: #34ce57;
    }

    &.is-valid:focus ~ .${customControlLabel}::before {
        box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &.is-invalid ~ .${customControlLabel} {
        color: #dc3545;
    }

    &.is-invalid ~ .${customControlLabel}::before {
        background-color: #efa2a9;
    }

    &.is-invalid ~ .${invalidFeedback}, &.is-invalid ~ .${invalidTooltip} {
        display: block;
    }

    &.is-invalid:checked ~ .${customControlLabel}::before {
        background-color: #e4606d;
    }

    &.is-invalid:focus ~ .${customControlLabel}::before {
        box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked ~ .${customControlLabel}::before {
        color: #fff;
        background-color: #007bff;
    }

    &:focus ~ .${customControlLabel}::before {
        box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &:active ~ .${customControlLabel}::before {
        color: #fff;
        background-color: #b3d7ff;
    }

    &:disabled ~ .${customControlLabel} {
        color: #6c757d;
    }

    &:disabled ~ .${customControlLabel}::before {
        background-color: #e9ecef;
    }
`;

export const customCheckbox = css`
    & .${customControlLabel}::before {
        border-radius: 0.25rem;
    }

    & .${customControlInput}:checked ~ .${customControlLabel}::before {
        background-color: #007bff;
    }

    & .${customControlInput}:checked ~ .${customControlLabel}::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
    }

    & .${customControlInput}:indeterminate ~ .${customControlLabel}::before {
        background-color: #007bff;
    }

    & .${customControlInput}:indeterminate ~ .${customControlLabel}::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
    }

    & .${customControlInput}:disabled:checked ~ .${customControlLabel}::before {
        background-color: rgba(0, 123, 255, 0.5);
    }

    &
        .${customControlInput}:disabled:indeterminate
        ~ .${customControlLabel}::before {
        background-color: rgba(0, 123, 255, 0.5);
    }
`;

export const customControl = css`
    position: relative;
    display: block;
    min-height: 1.5rem;
    padding-left: 1.5rem;
`;

export const customControlInline = css`
    display: -ms-inline-flexbox;
    display: inline-flex;
    margin-right: 1rem;
`;

export const validFeedback = css`
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #28a745;
`;

export const validTooltip = css`
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    line-height: 1;
    color: #fff;
    background-color: rgba(40, 167, 69, 0.8);
    border-radius: 0.2rem;
`;

export const invalidFeedback = css`
    display: none;
    width: 100%;
    margin-top: 0.25rem;
    font-size: 80%;
    color: #dc3545;
`;

export const invalidTooltip = css`
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.5rem;
    margin-top: 0.1rem;
    font-size: 0.875rem;
    line-height: 1;
    color: #fff;
    background-color: rgba(220, 53, 69, 0.8);
    border-radius: 0.2rem;
`;

export const customFile = css`
    position: relative;
    display: inline-block;
    width: 100%;
    height: calc(2.25rem + 2px);
    margin-bottom: 0;
`;

export const customFileLabel = css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;

    &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        display: block;
        height: 2.25rem;
        padding: 0.375rem 0.75rem;
        line-height: 1.5;
        color: #495057;
        content: "Browse";
        background-color: #e9ecef;
        border-left: 1px solid #ced4da;
        border-radius: 0 0.25rem 0.25rem 0;
    }

    transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    @media screen and (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }
`;

export const customFileInput = css`
    &.is-valid ~ .${customFileLabel} {
        border-color: #28a745;
    }

    &.is-valid ~ .${customFileLabel}::before {
        border-color: inherit;
    }

    &.is-valid ~ .${validFeedback}, &.is-valid ~ .${validTooltip} {
        display: block;
    }

    &.is-valid:focus ~ .${customFileLabel} {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &.is-invalid ~ .${customFileLabel} {
        border-color: #dc3545;
    }

    &.is-invalid ~ .${customFileLabel}::before {
        border-color: inherit;
    }

    &.is-invalid ~ .${invalidFeedback}, &.is-invalid ~ .${invalidTooltip} {
        display: block;
    }

    &.is-invalid:focus ~ .${customFileLabel} {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    position: relative;
    z-index: 2;
    width: 100%;
    height: calc(2.25rem + 2px);
    margin: 0;
    opacity: 0;

    &:focus ~ .${customFileLabel} {
        border-color: #80bdff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &:focus ~ .${customFileLabel}::after {
        border-color: #80bdff;
    }

    &:disabled ~ .${customFileLabel} {
        background-color: #e9ecef;
    }

    &:lang(en) ~ .${customFileLabel}::after {
        content: "Browse";
    }
`;

export const customRadio = css`
    & .${customControlLabel}::before {
        border-radius: 50%;
    }

    & .${customControlInput}:checked ~ .${customControlLabel}::before {
        background-color: #007bff;
    }

    & .${customControlInput}:checked ~ .${customControlLabel}::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
    }

    & .${customControlInput}:disabled:checked ~ .${customControlLabel}::before {
        background-color: rgba(0, 123, 255, 0.5);
    }
`;

export const customRange = css`
    width: 100%;
    padding-left: 0;
    background-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
        outline: none;
    }

    &::-moz-focus-outer {
        border: 0;
    }

    &::-webkit-slider-thumb {
        width: 1rem;
        height: 1rem;
        margin-top: -0.25rem;
        background-color: #007bff;
        border: 0;
        border-radius: 1rem;
        transition: background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        -webkit-appearance: none;
        appearance: none;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        &::-webkit-slider-thumb {
            transition: none;
        }
    }

    &::-webkit-slider-thumb:focus {
        outline: none;
        box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &::-webkit-slider-thumb:active {
        background-color: #b3d7ff;
    }

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 0.5rem;
        color: transparent;
        cursor: pointer;
        background-color: #dee2e6;
        border-color: transparent;
        border-radius: 1rem;
    }

    &::-moz-range-thumb {
        width: 1rem;
        height: 1rem;
        background-color: #007bff;
        border: 0;
        border-radius: 1rem;
        transition: background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        -moz-appearance: none;
        appearance: none;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        &::-moz-range-thumb {
            transition: none;
        }
    }

    &::-moz-range-thumb:focus {
        outline: none;
        box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &::-moz-range-thumb:active {
        background-color: #b3d7ff;
    }

    &::-moz-range-track {
        width: 100%;
        height: 0.5rem;
        color: transparent;
        cursor: pointer;
        background-color: #dee2e6;
        border-color: transparent;
        border-radius: 1rem;
    }

    &::-ms-thumb {
        width: 1rem;
        height: 1rem;
        background-color: #007bff;
        border: 0;
        border-radius: 1rem;
        transition: background-color 0.15s ease-in-out,
            border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        appearance: none;
    }

    @media screen and (prefers-reduced-motion: reduce) {
        &::-ms-thumb {
            transition: none;
        }
    }

    &::-ms-thumb:focus {
        outline: none;
        box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &::-ms-thumb:active {
        background-color: #b3d7ff;
    }

    &::-ms-track {
        width: 100%;
        height: 0.5rem;
        color: transparent;
        cursor: pointer;
        background-color: transparent;
        border-color: transparent;
        border-width: 0.5rem;
    }

    &::-ms-fill-lower {
        background-color: #dee2e6;
        border-radius: 1rem;
    }

    &::-ms-fill-upper {
        margin-right: 15px;
        background-color: #dee2e6;
        border-radius: 1rem;
    }
`;

export const customSelect = css`
    &.is-valid {
        border-color: #28a745;
    }

    &.is-valid:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &.is-valid ~ .${validFeedback}, &.is-valid ~ .${validTooltip} {
        display: block;
    }

    &.is-invalid {
        border-color: #dc3545;
    }

    &.is-invalid:focus {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    &.is-invalid ~ .${invalidFeedback}, &.is-invalid ~ .${invalidTooltip} {
        display: block;
    }

    display: inline-block;
    width: 100%;
    height: calc(2.25rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    line-height: 1.5;
    color: #495057;
    vertical-align: middle;
    background: #fff
        url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E")
        no-repeat right 0.75rem center;
    background-size: 8px 10px;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(128, 189, 255, 0.5);
    }

    &:focus::-ms-value {
        color: #495057;
        background-color: #fff;
    }

    &[multiple],
    &[size]:not([size="1"]) {
        height: auto;
        padding-right: 0.75rem;
        background-image: none;
    }

    &:disabled {
        color: #6c757d;
        background-color: #e9ecef;
    }

    &::-ms-expand {
        opacity: 0;
    }

    transition: background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    @media screen and (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }
`;

export const customSelectLg = css`
    height: calc(2.875rem + 2px);
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 125%;
`;

export const customSelectSm = css`
    height: calc(1.8125rem + 2px);
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    font-size: 75%;
`;

export const dBlock = css`
    display: block !important;
`;

export const dFlex = css`
    display: -ms-flexbox !important;
    display: flex !important;
`;

export const dInline = css`
    display: inline !important;
`;

export const dInlineBlock = css`
    display: inline-block !important;
`;

export const dInlineFlex = css`
    display: -ms-inline-flexbox !important;
    display: inline-flex !important;
`;

export const dLgBlock = css`
    @media (min-width: 992px) {
        & {
            display: block !important;
        }
    }
`;

export const dLgFlex = css`
    @media (min-width: 992px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;

export const dLgInline = css`
    @media (min-width: 992px) {
        & {
            display: inline !important;
        }
    }
`;

export const dLgInlineBlock = css`
    @media (min-width: 992px) {
        & {
            display: inline-block !important;
        }
    }
`;

export const dLgInlineFlex = css`
    @media (min-width: 992px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

export const dLgNone = css`
    @media (min-width: 992px) {
        & {
            display: none !important;
        }
    }
`;

export const dLgTable = css`
    @media (min-width: 992px) {
        & {
            display: table !important;
        }
    }
`;

export const dLgTableCell = css`
    @media (min-width: 992px) {
        & {
            display: table-cell !important;
        }
    }
`;

export const dLgTableRow = css`
    @media (min-width: 992px) {
        & {
            display: table-row !important;
        }
    }
`;

export const dMdBlock = css`
    @media (min-width: 768px) {
        & {
            display: block !important;
        }
    }
`;

export const dMdFlex = css`
    @media (min-width: 768px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;

export const dMdInline = css`
    @media (min-width: 768px) {
        & {
            display: inline !important;
        }
    }
`;

export const dMdInlineBlock = css`
    @media (min-width: 768px) {
        & {
            display: inline-block !important;
        }
    }
`;

export const dMdInlineFlex = css`
    @media (min-width: 768px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

export const dMdNone = css`
    @media (min-width: 768px) {
        & {
            display: none !important;
        }
    }
`;

export const dMdTable = css`
    @media (min-width: 768px) {
        & {
            display: table !important;
        }
    }
`;

export const dMdTableCell = css`
    @media (min-width: 768px) {
        & {
            display: table-cell !important;
        }
    }
`;

export const dMdTableRow = css`
    @media (min-width: 768px) {
        & {
            display: table-row !important;
        }
    }
`;

export const dNone = css`
    display: none !important;
`;

export const dPrintBlock = css`
    @media print {
        & {
            display: block !important;
        }
    }
`;

export const dPrintFlex = css`
    @media print {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;

export const dPrintInline = css`
    @media print {
        & {
            display: inline !important;
        }
    }
`;

export const dPrintInlineBlock = css`
    @media print {
        & {
            display: inline-block !important;
        }
    }
`;

export const dPrintInlineFlex = css`
    @media print {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

export const dPrintNone = css`
    @media print {
        & {
            display: none !important;
        }
    }
`;

export const dPrintTable = css`
    @media print {
        & {
            display: table !important;
        }
    }
`;

export const dPrintTableCell = css`
    @media print {
        & {
            display: table-cell !important;
        }
    }
`;

export const dPrintTableRow = css`
    @media print {
        & {
            display: table-row !important;
        }
    }
`;

export const dSmBlock = css`
    @media (min-width: 576px) {
        & {
            display: block !important;
        }
    }
`;

export const dSmFlex = css`
    @media (min-width: 576px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;

export const dSmInline = css`
    @media (min-width: 576px) {
        & {
            display: inline !important;
        }
    }
`;

export const dSmInlineBlock = css`
    @media (min-width: 576px) {
        & {
            display: inline-block !important;
        }
    }
`;

export const dSmInlineFlex = css`
    @media (min-width: 576px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

export const dSmNone = css`
    @media (min-width: 576px) {
        & {
            display: none !important;
        }
    }
`;

export const dSmTable = css`
    @media (min-width: 576px) {
        & {
            display: table !important;
        }
    }
`;

export const dSmTableCell = css`
    @media (min-width: 576px) {
        & {
            display: table-cell !important;
        }
    }
`;

export const dSmTableRow = css`
    @media (min-width: 576px) {
        & {
            display: table-row !important;
        }
    }
`;

export const dTable = css`
    display: table !important;
`;

export const dTableCell = css`
    display: table-cell !important;
`;

export const dTableRow = css`
    display: table-row !important;
`;

export const dXlBlock = css`
    @media (min-width: 1200px) {
        & {
            display: block !important;
        }
    }
`;

export const dXlFlex = css`
    @media (min-width: 1200px) {
        & {
            display: -ms-flexbox !important;
            display: flex !important;
        }
    }
`;

export const dXlInline = css`
    @media (min-width: 1200px) {
        & {
            display: inline !important;
        }
    }
`;

export const dXlInlineBlock = css`
    @media (min-width: 1200px) {
        & {
            display: inline-block !important;
        }
    }
`;

export const dXlInlineFlex = css`
    @media (min-width: 1200px) {
        & {
            display: -ms-inline-flexbox !important;
            display: inline-flex !important;
        }
    }
`;

export const dXlNone = css`
    @media (min-width: 1200px) {
        & {
            display: none !important;
        }
    }
`;

export const dXlTable = css`
    @media (min-width: 1200px) {
        & {
            display: table !important;
        }
    }
`;

export const dXlTableCell = css`
    @media (min-width: 1200px) {
        & {
            display: table-cell !important;
        }
    }
`;

export const dXlTableRow = css`
    @media (min-width: 1200px) {
        & {
            display: table-row !important;
        }
    }
`;

export const display1 = css`
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.2;
`;

export const display2 = css`
    font-size: 5.5rem;
    font-weight: 300;
    line-height: 1.2;
`;

export const display3 = css`
    font-size: 4.5rem;
    font-weight: 300;
    line-height: 1.2;
`;

export const display4 = css`
    font-size: 3.5rem;
    font-weight: 300;
    line-height: 1.2;
`;

export const dropdown = css`
    position: relative;
`;

export const dropdownDivider = css`
    height: 0;
    margin: 0.5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
`;

export const dropdownHeader = css`
    display: block;
    padding: 0.5rem 1.5rem;
    margin-bottom: 0;
    font-size: 0.875rem;
    color: #6c757d;
    white-space: nowrap;
`;

export const dropdownItem = css`
    display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;

    &:hover,
    &:focus {
        color: #16181b;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    &.${active}, &:active {
        color: #fff;
        text-decoration: none;
        background-color: #007bff;
    }

    &.disabled,
    &:disabled {
        color: #6c757d;
        background-color: transparent;
    }
`;

export const dropdownItemText = css`
    display: block;
    padding: 0.25rem 1.5rem;
    color: #212529;
`;

export const dropdownMenu = css`
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 0.5rem 0;
    margin: 0.125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 0.25rem;

    &[x-placement^="top"],
    &[x-placement^="right"],
    &[x-placement^="bottom"],
    &[x-placement^="left"] {
        right: auto;
        bottom: auto;
    }

    &.${show} {
        display: block;
    }
`;

export const dropdownMenuRight = css`
    right: 0;
    left: auto;
`;

export const dropleft = css`
    position: relative;

    & .${dropdownMenu} {
        top: 0;
        right: 100%;
        left: auto;
        margin-top: 0;
        margin-right: 0.125rem;
    }

    & .${dropdownToggle}::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
    }

    & .${dropdownToggle}::after {
        display: none;
    }

    & .${dropdownToggle}::before {
        display: inline-block;
        width: 0;
        height: 0;
        margin-right: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.3em solid transparent;
        border-right: 0.3em solid;
        border-bottom: 0.3em solid transparent;
    }

    & .${dropdownToggle}:empty::after {
        margin-left: 0;
    }

    & .${dropdownToggle}::before {
        vertical-align: 0;
    }

    & .${dropdownToggleSplit}::before {
        margin-right: 0;
    }
`;

export const dropright = css`
    position: relative;

    & .${dropdownMenu} {
        top: 0;
        right: auto;
        left: 100%;
        margin-top: 0;
        margin-left: 0.125rem;
    }

    & .${dropdownToggle}::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0.3em solid transparent;
        border-right: 0;
        border-bottom: 0.3em solid transparent;
        border-left: 0.3em solid;
    }

    & .${dropdownToggle}:empty::after {
        margin-left: 0;
    }

    & .${dropdownToggle}::after {
        vertical-align: 0;
    }

    & .${dropdownToggleSplit}::after {
        margin-left: 0;
    }
`;

export const dropup = css`
    position: relative;

    & .${dropdownMenu} {
        top: auto;
        bottom: 100%;
        margin-top: 0;
        margin-bottom: 0.125rem;
    }

    & .${dropdownToggle}::after {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 0.255em;
        vertical-align: 0.255em;
        content: "";
        border-top: 0;
        border-right: 0.3em solid transparent;
        border-bottom: 0.3em solid;
        border-left: 0.3em solid transparent;
    }

    & .${dropdownToggle}:empty::after {
        margin-left: 0;
    }

    & .${dropdownToggleSplit}::after {
        margin-left: 0;
    }
`;

export const embedResponsive = css`
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;

    &::before {
        display: block;
        content: "";
    }

    & .embed-responsive-item,
    & iframe,
    & embed,
    & object,
    & video {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }
`;

export const embedResponsive1by1 = css`
    &::before {
        padding-top: 100%;
    }
`;

export const embedResponsive4by3 = css`
    &::before {
        padding-top: 75%;
    }
`;

export const embedResponsive16by9 = css`
    &::before {
        padding-top: 56.25%;
    }
`;

export const embedResponsive21by9 = css`
    &::before {
        padding-top: 42.857143%;
    }
`;

export const fade = css`
    transition: opacity 0.15s linear;

    @media screen and (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }

    &:not(.${show}) {
        opacity: 0;
    }
`;

export const figure = css`
    display: inline-block;
`;

export const figureCaption = css`
    font-size: 90%;
    color: #6c757d;
`;

export const figureImg = css`
    margin-bottom: 0.5rem;
    line-height: 1;
`;

export const fixedBottom = css`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1030;
`;

export const fixedTop = css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
`;

export const flexColumn = css`
    -ms-flex-direction: column !important;
    flex-direction: column !important;
`;

export const flexColumnReverse = css`
    -ms-flex-direction: column-reverse !important;
    flex-direction: column-reverse !important;
`;

export const flexFill = css`
    -ms-flex: 1 1 auto !important;
    flex: 1 1 auto !important;
`;

export const flexGrow0 = css`
    -ms-flex-positive: 0 !important;
    flex-grow: 0 !important;
`;

export const flexGrow1 = css`
    -ms-flex-positive: 1 !important;
    flex-grow: 1 !important;
`;

export const flexLgColumn = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

export const flexLgColumnReverse = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;

export const flexLgFill = css`
    @media (min-width: 992px) {
        & {
            -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important;
        }
    }
`;

export const flexLgGrow0 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
        }
    }
`;

export const flexLgGrow1 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-positive: 1 !important;
            flex-grow: 1 !important;
        }
    }
`;

export const flexLgNowrap = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;

export const flexLgRow = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;

export const flexLgRowReverse = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;

export const flexLgShrink0 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
        }
    }
`;

export const flexLgShrink1 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-negative: 1 !important;
            flex-shrink: 1 !important;
        }
    }
`;

export const flexLgWrap = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;

export const flexLgWrapReverse = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;

export const flexMdColumn = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

export const flexMdColumnReverse = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;

export const flexMdFill = css`
    @media (min-width: 768px) {
        & {
            -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important;
        }
    }
`;

export const flexMdGrow0 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
        }
    }
`;

export const flexMdGrow1 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-positive: 1 !important;
            flex-grow: 1 !important;
        }
    }
`;

export const flexMdNowrap = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;

export const flexMdRow = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;

export const flexMdRowReverse = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;

export const flexMdShrink0 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
        }
    }
`;

export const flexMdShrink1 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-negative: 1 !important;
            flex-shrink: 1 !important;
        }
    }
`;

export const flexMdWrap = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;

export const flexMdWrapReverse = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;

export const flexNowrap = css`
    -ms-flex-wrap: nowrap !important;
    flex-wrap: nowrap !important;
`;

export const flexRow = css`
    -ms-flex-direction: row !important;
    flex-direction: row !important;
`;

export const flexRowReverse = css`
    -ms-flex-direction: row-reverse !important;
    flex-direction: row-reverse !important;
`;

export const flexShrink0 = css`
    -ms-flex-negative: 0 !important;
    flex-shrink: 0 !important;
`;

export const flexShrink1 = css`
    -ms-flex-negative: 1 !important;
    flex-shrink: 1 !important;
`;

export const flexSmColumn = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

export const flexSmColumnReverse = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;

export const flexSmFill = css`
    @media (min-width: 576px) {
        & {
            -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important;
        }
    }
`;

export const flexSmGrow0 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
        }
    }
`;

export const flexSmGrow1 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-positive: 1 !important;
            flex-grow: 1 !important;
        }
    }
`;

export const flexSmNowrap = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;

export const flexSmRow = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;

export const flexSmRowReverse = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;

export const flexSmShrink0 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
        }
    }
`;

export const flexSmShrink1 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-negative: 1 !important;
            flex-shrink: 1 !important;
        }
    }
`;

export const flexSmWrap = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;

export const flexSmWrapReverse = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;

export const flexWrap = css`
    -ms-flex-wrap: wrap !important;
    flex-wrap: wrap !important;
`;

export const flexWrapReverse = css`
    -ms-flex-wrap: wrap-reverse !important;
    flex-wrap: wrap-reverse !important;
`;

export const flexXlColumn = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: column !important;
            flex-direction: column !important;
        }
    }
`;

export const flexXlColumnReverse = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: column-reverse !important;
            flex-direction: column-reverse !important;
        }
    }
`;

export const flexXlFill = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex: 1 1 auto !important;
            flex: 1 1 auto !important;
        }
    }
`;

export const flexXlGrow0 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-positive: 0 !important;
            flex-grow: 0 !important;
        }
    }
`;

export const flexXlGrow1 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-positive: 1 !important;
            flex-grow: 1 !important;
        }
    }
`;

export const flexXlNowrap = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-wrap: nowrap !important;
            flex-wrap: nowrap !important;
        }
    }
`;

export const flexXlRow = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: row !important;
            flex-direction: row !important;
        }
    }
`;

export const flexXlRowReverse = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-direction: row-reverse !important;
            flex-direction: row-reverse !important;
        }
    }
`;

export const flexXlShrink0 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-negative: 0 !important;
            flex-shrink: 0 !important;
        }
    }
`;

export const flexXlShrink1 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-negative: 1 !important;
            flex-shrink: 1 !important;
        }
    }
`;

export const flexXlWrap = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-wrap: wrap !important;
            flex-wrap: wrap !important;
        }
    }
`;

export const flexXlWrapReverse = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-wrap: wrap-reverse !important;
            flex-wrap: wrap-reverse !important;
        }
    }
`;

export const floatLeft = css`
    float: left !important;
`;

export const floatLgLeft = css`
    @media (min-width: 992px) {
        & {
            float: left !important;
        }
    }
`;

export const floatLgNone = css`
    @media (min-width: 992px) {
        & {
            float: none !important;
        }
    }
`;

export const floatLgRight = css`
    @media (min-width: 992px) {
        & {
            float: right !important;
        }
    }
`;

export const floatMdLeft = css`
    @media (min-width: 768px) {
        & {
            float: left !important;
        }
    }
`;

export const floatMdNone = css`
    @media (min-width: 768px) {
        & {
            float: none !important;
        }
    }
`;

export const floatMdRight = css`
    @media (min-width: 768px) {
        & {
            float: right !important;
        }
    }
`;

export const floatNone = css`
    float: none !important;
`;

export const floatRight = css`
    float: right !important;
`;

export const floatSmLeft = css`
    @media (min-width: 576px) {
        & {
            float: left !important;
        }
    }
`;

export const floatSmNone = css`
    @media (min-width: 576px) {
        & {
            float: none !important;
        }
    }
`;

export const floatSmRight = css`
    @media (min-width: 576px) {
        & {
            float: right !important;
        }
    }
`;

export const floatXlLeft = css`
    @media (min-width: 1200px) {
        & {
            float: left !important;
        }
    }
`;

export const floatXlNone = css`
    @media (min-width: 1200px) {
        & {
            float: none !important;
        }
    }
`;

export const floatXlRight = css`
    @media (min-width: 1200px) {
        & {
            float: right !important;
        }
    }
`;

export const fontItalic = css`
    font-style: italic !important;
`;

export const fontWeightBold = css`
    font-weight: 700 !important;
`;

export const fontWeightLight = css`
    font-weight: 300 !important;
`;

export const fontWeightNormal = css`
    font-weight: 400 !important;
`;

export const formCheck = css`
    position: relative;
    display: block;
    padding-left: 1.25rem;
`;

export const formCheckInput = css`
    position: absolute;
    margin-top: 0.3rem;
    margin-left: -1.25rem;

    &:disabled ~ .${formCheckLabel} {
        color: #6c757d;
    }

    &.is-valid ~ .${formCheckLabel} {
        color: #28a745;
    }

    &.is-valid ~ .${validFeedback}, &.is-valid ~ .${validTooltip} {
        display: block;
    }

    &.is-invalid ~ .${formCheckLabel} {
        color: #dc3545;
    }

    &.is-invalid ~ .${invalidFeedback}, &.is-invalid ~ .${invalidTooltip} {
        display: block;
    }
`;

export const formCheckInline = css`
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-align: center;
    align-items: center;
    padding-left: 0;
    margin-right: 0.75rem;

    & .${formCheckInput} {
        position: static;
        margin-top: 0;
        margin-right: 0.3125rem;
        margin-left: 0;
    }
`;

export const formCheckLabel = css`
    margin-bottom: 0;
`;

export const formControl = css`
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    @media screen and (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }

    &::-ms-expand {
        background-color: transparent;
        border: 0;
    }

    &:focus {
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &::-webkit-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    &::-moz-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    &:-ms-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    &::-ms-input-placeholder {
        color: #6c757d;
        opacity: 1;
    }

    &::placeholder {
        color: #6c757d;
        opacity: 1;
    }

    &:disabled,
    &[readonly] {
        background-color: #e9ecef;
        opacity: 1;
    }

    select&:not([size]):not([multiple]) {
        height: calc(2.25rem + 2px);
    }

    select&:focus::-ms-value {
        color: #495057;
        background-color: #fff;
    }

    &.is-valid {
        border-color: #28a745;
    }

    &.is-valid:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &.is-valid ~ .${validFeedback}, &.is-valid ~ .${validTooltip} {
        display: block;
    }

    &.is-invalid {
        border-color: #dc3545;
    }

    &.is-invalid:focus {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    &.is-invalid ~ .${invalidFeedback}, &.is-invalid ~ .${invalidTooltip} {
        display: block;
    }
`;

export const formControlFile = css`
    display: block;
    width: 100%;

    &.is-valid ~ .${validFeedback}, &.is-valid ~ .${validTooltip} {
        display: block;
    }

    &.is-invalid ~ .${invalidFeedback}, &.is-invalid ~ .${invalidTooltip} {
        display: block;
    }
`;

export const formControlLg = css`
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 0.3rem;

    select&:not([size]):not([multiple]) {
        height: calc(2.875rem + 2px);
    }
`;

export const formControlSm = css`
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.5;
    border-radius: 0.2rem;

    select&:not([size]):not([multiple]) {
        height: calc(1.8125rem + 2px);
    }
`;

export const formControlPlaintext = css`
    display: block;
    width: 100%;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    margin-bottom: 0;
    line-height: 1.5;
    color: #212529;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;

    &.${formControlSm}, &.${formControlLg} {
        padding-right: 0;
        padding-left: 0;
    }
`;

export const formControlRange = css`
    display: block;
    width: 100%;
`;

export const formGroup = css`
    margin-bottom: 1rem;
`;

export const formInline = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-align: center;
    align-items: center;

    & .${formCheck} {
        width: 100%;
    }

    @media (min-width: 576px) {
        & label {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-bottom: 0;
        }

        & .${formGroup} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex: 0 0 auto;
            flex: 0 0 auto;
            -ms-flex-flow: row wrap;
            flex-flow: row wrap;
            -ms-flex-align: center;
            align-items: center;
            margin-bottom: 0;
        }

        & .${formControl} {
            display: inline-block;
            width: auto;
            vertical-align: middle;
        }

        & .${formControlPlaintext} {
            display: inline-block;
        }

        & .${inputGroup}, & .${customSelect} {
            width: auto;
        }

        & .${formCheck} {
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            width: auto;
            padding-left: 0;
        }

        & .${formCheckInput} {
            position: relative;
            margin-top: 0;
            margin-right: 0.25rem;
            margin-left: 0;
        }

        & .${customControl} {
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
        }

        & .${customControlLabel} {
            margin-bottom: 0;
        }
    }
`;

export const formRow = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;

    & > .${col}, & > [class*="col-"] {
        padding-right: 5px;
        padding-left: 5px;
    }
`;

export const formText = css`
    display: block;
    margin-top: 0.25rem;
`;

export const h25 = css`
    height: 25% !important;
`;

export const h50 = css`
    height: 50% !important;
`;

export const h75 = css`
    height: 75% !important;
`;

export const h100 = css`
    height: 100% !important;
`;

export const hAuto = css`
    height: auto !important;
`;

export const h1 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;

    font-size: 2.5rem;
`;

export const h2 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;

    font-size: 2rem;
`;

export const h3 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;

    font-size: 1.75rem;
`;

export const h4 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;

    font-size: 1.5rem;
`;

export const h5 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;

    font-size: 1.25rem;
`;

export const h6 = css`
    margin-bottom: 0.5rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    color: inherit;

    font-size: 1rem;
`;

export const imgFluid = css`
    max-width: 100%;
    height: auto;
`;

export const imgThumbnail = css`
    padding: 0.25rem;
    background-color: #fff;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    max-width: 100%;
    height: auto;
`;

export const initialism = css`
    font-size: 90%;
    text-transform: uppercase;
`;

export const inputGroupPrepend = css`
    display: -ms-flexbox;
    display: flex;

    & .${btn} {
        position: relative;
        z-index: 2;
    }

    &
        .${btn}
        + .${btn},
        &
        .${btn}
        + .${inputGroupText},
        &
        .${inputGroupText}
        + .${inputGroupText},
        &
        .${inputGroupText}
        + .${btn} {
        margin-left: -1px;
    }

    margin-right: -1px;
`;

export const inputGroupText = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.375rem 0.75rem;
    margin-bottom: 0;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    text-align: center;
    white-space: nowrap;
    background-color: #e9ecef;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;

    & input[type="radio"],
    & input[type="checkbox"] {
        margin-top: 0;
    }
`;

export const inputGroupAppend = css`
    display: -ms-flexbox;
    display: flex;

    & .${btn} {
        position: relative;
        z-index: 2;
    }

    &
        .${btn}
        + .${btn},
        &
        .${btn}
        + .${inputGroupText},
        &
        .${inputGroupText}
        + .${inputGroupText},
        &
        .${inputGroupText}
        + .${btn} {
        margin-left: -1px;
    }

    margin-left: -1px;
`;

export const inputGroupLg = css`& > .${formControlPlaintext}.${formControl}, & > .${inputGroupPrepend} > .${formControlPlaintext}.${inputGroupText}, & > .${inputGroupAppend} > .${formControlPlaintext}.${inputGroupText}, & > .${inputGroupPrepend} > .${formControlPlaintext}.${btn}, & > .${inputGroupAppend} > .${formControlPlaintext}.${btn} {
  padding-right: 0;
  padding-left: 0;
}

& > .${formControl}, & > .${inputGroupPrepend} > .${inputGroupText}, & > .${inputGroupAppend} > .${inputGroupText}, & > .${inputGroupPrepend} > .${btn}, & > .${inputGroupAppend} > .${btn} {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}

& > select.${formControl}:not([size]):not([multiple]), & > .${inputGroupPrepend} > select.${inputGroupText}:not([size]):not([multiple]), & > .${inputGroupAppend} > select.${inputGroupText}:not([size]):not([multiple]), & > .${inputGroupPrepend} > select.${btn}:not([size]):not([multiple]), & > .${inputGroupAppend} > select.${btn}:not([size]):not([multiple]) {
  height: calc(2.875rem + 2px);
}

`;

export const inputGroupSm = css`& > .${formControlPlaintext}.${formControl}, & > .${inputGroupPrepend} > .${formControlPlaintext}.${inputGroupText}, & > .${inputGroupAppend} > .${formControlPlaintext}.${inputGroupText}, & > .${inputGroupPrepend} > .${formControlPlaintext}.${btn}, & > .${inputGroupAppend} > .${formControlPlaintext}.${btn} {
  padding-right: 0;
  padding-left: 0;
}

& > .${formControl}, & > .${inputGroupPrepend} > .${inputGroupText}, & > .${inputGroupAppend} > .${inputGroupText}, & > .${inputGroupPrepend} > .${btn}, & > .${inputGroupAppend} > .${btn} {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}

& > select.${formControl}:not([size]):not([multiple]), & > .${inputGroupPrepend} > select.${inputGroupText}:not([size]):not([multiple]), & > .${inputGroupAppend} > select.${inputGroupText}:not([size]):not([multiple]), & > .${inputGroupPrepend} > select.${btn}:not([size]):not([multiple]), & > .${inputGroupAppend} > select.${btn}:not([size]):not([multiple]) {
  height: calc(1.8125rem + 2px);
}

`;

export const invisible = css`
    visibility: hidden !important;
`;

export const jumbotron = css`
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    background-color: #e9ecef;
    border-radius: 0.3rem;

    @media (min-width: 576px) {
        & {
            padding: 4rem 2rem;
        }
    }
`;

export const jumbotronFluid = css`
    padding-right: 0;
    padding-left: 0;
    border-radius: 0;
`;

export const justifyContentAround = css`
    -ms-flex-pack: distribute !important;
    justify-content: space-around !important;
`;

export const justifyContentBetween = css`
    -ms-flex-pack: justify !important;
    justify-content: space-between !important;
`;

export const justifyContentCenter = css`
    -ms-flex-pack: center !important;
    justify-content: center !important;
`;

export const justifyContentEnd = css`
    -ms-flex-pack: end !important;
    justify-content: flex-end !important;
`;

export const justifyContentLgAround = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;

export const justifyContentLgBetween = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;

export const justifyContentLgCenter = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;

export const justifyContentLgEnd = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;

export const justifyContentLgStart = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;

export const justifyContentMdAround = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;

export const justifyContentMdBetween = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;

export const justifyContentMdCenter = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;

export const justifyContentMdEnd = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;

export const justifyContentMdStart = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;

export const justifyContentSmAround = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;

export const justifyContentSmBetween = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;

export const justifyContentSmCenter = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;

export const justifyContentSmEnd = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;

export const justifyContentSmStart = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;

export const justifyContentStart = css`
    -ms-flex-pack: start !important;
    justify-content: flex-start !important;
`;

export const justifyContentXlAround = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: distribute !important;
            justify-content: space-around !important;
        }
    }
`;

export const justifyContentXlBetween = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: justify !important;
            justify-content: space-between !important;
        }
    }
`;

export const justifyContentXlCenter = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: center !important;
            justify-content: center !important;
        }
    }
`;

export const justifyContentXlEnd = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: end !important;
            justify-content: flex-end !important;
        }
    }
`;

export const justifyContentXlStart = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-pack: start !important;
            justify-content: flex-start !important;
        }
    }
`;

export const lead = css`
    font-size: 1.25rem;
    font-weight: 300;
`;

export const listGroupFlush = css`
    & .${listGroupItem} {
        border-right: 0;
        border-left: 0;
        border-radius: 0;
    }

    &:first-child .${listGroupItem}:first-child {
        border-top: 0;
    }

    &:last-child .${listGroupItem}:last-child {
        border-bottom: 0;
    }
`;

export const listGroupItemAction = css`
    width: 100%;
    color: #495057;
    text-align: inherit;

    &:hover,
    &:focus {
        color: #495057;
        text-decoration: none;
        background-color: #f8f9fa;
    }

    &:active {
        color: #212529;
        background-color: #e9ecef;
    }
`;

export const listGroupItemDanger = css`
  color: #721c24;
  background-color: #f5c6cb;


&.${listGroupItemAction}:hover, &.${listGroupItemAction}:focus {
  color: #721c24;
  background-color: #f1b0b7;
}

&.${listGroupItemAction}.${active} {
  color: #fff;
  background-color: #721c24;
  border-color: #721c24;
}

`;

export const listGroupItemDark = css`
  color: #1b1e21;
  background-color: #c6c8ca;


&.${listGroupItemAction}:hover, &.${listGroupItemAction}:focus {
  color: #1b1e21;
  background-color: #b9bbbe;
}

&.${listGroupItemAction}.${active} {
  color: #fff;
  background-color: #1b1e21;
  border-color: #1b1e21;
}

`;

export const listGroupItemInfo = css`
  color: #0c5460;
  background-color: #bee5eb;


&.${listGroupItemAction}:hover, &.${listGroupItemAction}:focus {
  color: #0c5460;
  background-color: #abdde5;
}

&.${listGroupItemAction}.${active} {
  color: #fff;
  background-color: #0c5460;
  border-color: #0c5460;
}

`;

export const listGroupItemLight = css`
  color: #818182;
  background-color: #fdfdfe;


&.${listGroupItemAction}:hover, &.${listGroupItemAction}:focus {
  color: #818182;
  background-color: #ececf6;
}

&.${listGroupItemAction}.${active} {
  color: #fff;
  background-color: #818182;
  border-color: #818182;
}

`;

export const listGroupItemPrimary = css`
  color: #004085;
  background-color: #b8daff;


&.${listGroupItemAction}:hover, &.${listGroupItemAction}:focus {
  color: #004085;
  background-color: #9fcdff;
}

&.${listGroupItemAction}.${active} {
  color: #fff;
  background-color: #004085;
  border-color: #004085;
}

`;

export const listGroupItemSecondary = css`
  color: #383d41;
  background-color: #d6d8db;


&.${listGroupItemAction}:hover, &.${listGroupItemAction}:focus {
  color: #383d41;
  background-color: #c8cbcf;
}

&.${listGroupItemAction}.${active} {
  color: #fff;
  background-color: #383d41;
  border-color: #383d41;
}

`;

export const listGroupItemSuccess = css`
  color: #155724;
  background-color: #c3e6cb;


&.${listGroupItemAction}:hover, &.${listGroupItemAction}:focus {
  color: #155724;
  background-color: #b1dfbb;
}

&.${listGroupItemAction}.${active} {
  color: #fff;
  background-color: #155724;
  border-color: #155724;
}

`;

export const listGroupItemWarning = css`
  color: #856404;
  background-color: #ffeeba;


&.${listGroupItemAction}:hover, &.${listGroupItemAction}:focus {
  color: #856404;
  background-color: #ffe8a1;
}

&.${listGroupItemAction}.${active} {
  color: #fff;
  background-color: #856404;
  border-color: #856404;
}

`;

export const listInline = css`
    padding-left: 0;
    list-style: none;
`;

export const listInlineItem = css`
    display: inline-block;

    &:not(:last-child) {
        margin-right: 0.5rem;
    }
`;

export const listUnstyled = css`
    padding-left: 0;
    list-style: none;
`;

export const m0 = css`
    margin: 0 !important;
`;

export const m1 = css`
    margin: 0.25rem !important;
`;

export const m2 = css`
    margin: 0.5rem !important;
`;

export const m3 = css`
    margin: 1rem !important;
`;

export const m4 = css`
    margin: 1.5rem !important;
`;

export const m5 = css`
    margin: 3rem !important;
`;

export const mAuto = css`
    margin: auto !important;
`;

export const mLg0 = css`
    @media (min-width: 992px) {
        & {
            margin: 0 !important;
        }
    }
`;

export const mLg1 = css`
    @media (min-width: 992px) {
        & {
            margin: 0.25rem !important;
        }
    }
`;

export const mLg2 = css`
    @media (min-width: 992px) {
        & {
            margin: 0.5rem !important;
        }
    }
`;

export const mLg3 = css`
    @media (min-width: 992px) {
        & {
            margin: 1rem !important;
        }
    }
`;

export const mLg4 = css`
    @media (min-width: 992px) {
        & {
            margin: 1.5rem !important;
        }
    }
`;

export const mLg5 = css`
    @media (min-width: 992px) {
        & {
            margin: 3rem !important;
        }
    }
`;

export const mLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin: auto !important;
        }
    }
`;

export const mMd0 = css`
    @media (min-width: 768px) {
        & {
            margin: 0 !important;
        }
    }
`;

export const mMd1 = css`
    @media (min-width: 768px) {
        & {
            margin: 0.25rem !important;
        }
    }
`;

export const mMd2 = css`
    @media (min-width: 768px) {
        & {
            margin: 0.5rem !important;
        }
    }
`;

export const mMd3 = css`
    @media (min-width: 768px) {
        & {
            margin: 1rem !important;
        }
    }
`;

export const mMd4 = css`
    @media (min-width: 768px) {
        & {
            margin: 1.5rem !important;
        }
    }
`;

export const mMd5 = css`
    @media (min-width: 768px) {
        & {
            margin: 3rem !important;
        }
    }
`;

export const mMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin: auto !important;
        }
    }
`;

export const mSm0 = css`
    @media (min-width: 576px) {
        & {
            margin: 0 !important;
        }
    }
`;

export const mSm1 = css`
    @media (min-width: 576px) {
        & {
            margin: 0.25rem !important;
        }
    }
`;

export const mSm2 = css`
    @media (min-width: 576px) {
        & {
            margin: 0.5rem !important;
        }
    }
`;

export const mSm3 = css`
    @media (min-width: 576px) {
        & {
            margin: 1rem !important;
        }
    }
`;

export const mSm4 = css`
    @media (min-width: 576px) {
        & {
            margin: 1.5rem !important;
        }
    }
`;

export const mSm5 = css`
    @media (min-width: 576px) {
        & {
            margin: 3rem !important;
        }
    }
`;

export const mSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin: auto !important;
        }
    }
`;

export const mXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin: 0 !important;
        }
    }
`;

export const mXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin: 0.25rem !important;
        }
    }
`;

export const mXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin: 0.5rem !important;
        }
    }
`;

export const mXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin: 1rem !important;
        }
    }
`;

export const mXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin: 1.5rem !important;
        }
    }
`;

export const mXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin: 3rem !important;
        }
    }
`;

export const mXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin: auto !important;
        }
    }
`;

export const mark = css`
    padding: 0.2em;
    background-color: #fcf8e3;
`;

export const mb0 = css`
    margin-bottom: 0 !important;
`;

export const mb1 = css`
    margin-bottom: 0.25rem !important;
`;

export const mb2 = css`
    margin-bottom: 0.5rem !important;
`;

export const mb3 = css`
    margin-bottom: 1rem !important;
`;

export const mb4 = css`
    margin-bottom: 1.5rem !important;
`;

export const mb5 = css`
    margin-bottom: 3rem !important;
`;

export const mbAuto = css`
    margin-bottom: auto !important;
`;

export const mbLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const mbLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mbLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mbLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const mbLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mbLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const mbLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-bottom: auto !important;
        }
    }
`;

export const mbMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const mbMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mbMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mbMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const mbMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mbMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const mbMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-bottom: auto !important;
        }
    }
`;

export const mbSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const mbSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mbSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mbSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const mbSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mbSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const mbSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-bottom: auto !important;
        }
    }
`;

export const mbXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const mbXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mbXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mbXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const mbXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mbXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const mbXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-bottom: auto !important;
        }
    }
`;

export const media = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
`;

export const mediaBody = css`
    -ms-flex: 1;
    flex: 1;
`;

export const mh100 = css`
    max-height: 100% !important;
`;

export const ml0 = css`
    margin-left: 0 !important;
`;

export const ml1 = css`
    margin-left: 0.25rem !important;
`;

export const ml2 = css`
    margin-left: 0.5rem !important;
`;

export const ml3 = css`
    margin-left: 1rem !important;
`;

export const ml4 = css`
    margin-left: 1.5rem !important;
`;

export const ml5 = css`
    margin-left: 3rem !important;
`;

export const mlAuto = css`
    margin-left: auto !important;
`;

export const mlLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 0 !important;
        }
    }
`;

export const mlLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mlLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mlLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mlLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mlLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mlLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-left: auto !important;
        }
    }
`;

export const mlMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 0 !important;
        }
    }
`;

export const mlMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mlMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mlMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mlMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mlMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mlMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-left: auto !important;
        }
    }
`;

export const mlSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 0 !important;
        }
    }
`;

export const mlSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mlSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mlSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mlSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mlSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mlSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-left: auto !important;
        }
    }
`;

export const mlXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 0 !important;
        }
    }
`;

export const mlXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mlXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mlXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mlXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mlXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mlXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-left: auto !important;
        }
    }
`;

export const modalDialog = css`
    position: relative;
    width: auto;
    margin: 0.5rem;
    pointer-events: none;

    @media (min-width: 576px) {
        & {
            max-width: 500px;
            margin: 1.75rem auto;
        }
    }
`;

export const modal = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    outline: 0;

    &.${fade} .${modalDialog} {
        transition: -webkit-transform 0.3s ease-out;
        transition: transform 0.3s ease-out;
        transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
        -webkit-transform: translate(0, -25%);
        transform: translate(0, -25%);
    }

    @media screen and (prefers-reduced-motion: reduce) {
        &.${fade} .${modalDialog} {
            transition: none;
        }
    }

    &.${show} .${modalDialog} {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
    }
`;

export const modalBackdrop = css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1040;
    background-color: #000;

    &.${fade} {
        opacity: 0;
    }

    &.${show} {
        opacity: 0.5;
    }
`;

export const modalBody = css`
    position: relative;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1rem;
`;

export const modalContent = css`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
`;

export const modalDialogCentered = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    min-height: calc(100% - (0.5rem * 2));

    @media (min-width: 576px) {
        & {
            min-height: calc(100% - (1.75rem * 2));
        }
    }
`;

export const modalFooter = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid #e9ecef;

    & > :not(:first-child) {
        margin-left: 0.25rem;
    }

    & > :not(:last-child) {
        margin-right: 0.25rem;
    }
`;

export const modalHeader = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;

    & .${close} {
        padding: 1rem;
        margin: -1rem -1rem -1rem auto;
    }
`;

export const modalLg = css`
    @media (min-width: 992px) {
        & {
            max-width: 800px;
        }
    }
`;

export const modalOpen = css`
    overflow: hidden;

    & .${modal} {
        overflow-x: hidden;
        overflow-y: auto;
    }
`;

export const modalScrollbarMeasure = css`
    position: absolute;
    top: -9999px;
    width: 50px;
    height: 50px;
    overflow: scroll;
`;

export const modalSm = css`
    @media (min-width: 576px) {
        & {
            max-width: 300px;
        }
    }
`;

export const modalTitle = css`
    margin-bottom: 0;
    line-height: 1.5;
`;

export const mr0 = css`
    margin-right: 0 !important;
`;

export const mr1 = css`
    margin-right: 0.25rem !important;
`;

export const mr2 = css`
    margin-right: 0.5rem !important;
`;

export const mr3 = css`
    margin-right: 1rem !important;
`;

export const mr4 = css`
    margin-right: 1.5rem !important;
`;

export const mr5 = css`
    margin-right: 3rem !important;
`;

export const mrAuto = css`
    margin-right: auto !important;
`;

export const mrLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0 !important;
        }
    }
`;

export const mrLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0.25rem !important;
        }
    }
`;

export const mrLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0.5rem !important;
        }
    }
`;

export const mrLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 1rem !important;
        }
    }
`;

export const mrLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 1.5rem !important;
        }
    }
`;

export const mrLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 3rem !important;
        }
    }
`;

export const mrLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-right: auto !important;
        }
    }
`;

export const mrMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0 !important;
        }
    }
`;

export const mrMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0.25rem !important;
        }
    }
`;

export const mrMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0.5rem !important;
        }
    }
`;

export const mrMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 1rem !important;
        }
    }
`;

export const mrMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 1.5rem !important;
        }
    }
`;

export const mrMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 3rem !important;
        }
    }
`;

export const mrMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-right: auto !important;
        }
    }
`;

export const mrSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0 !important;
        }
    }
`;

export const mrSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0.25rem !important;
        }
    }
`;

export const mrSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0.5rem !important;
        }
    }
`;

export const mrSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 1rem !important;
        }
    }
`;

export const mrSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 1.5rem !important;
        }
    }
`;

export const mrSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 3rem !important;
        }
    }
`;

export const mrSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-right: auto !important;
        }
    }
`;

export const mrXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0 !important;
        }
    }
`;

export const mrXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0.25rem !important;
        }
    }
`;

export const mrXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0.5rem !important;
        }
    }
`;

export const mrXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 1rem !important;
        }
    }
`;

export const mrXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 1.5rem !important;
        }
    }
`;

export const mrXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 3rem !important;
        }
    }
`;

export const mrXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-right: auto !important;
        }
    }
`;

export const mt0 = css`
    margin-top: 0 !important;
`;

export const mt1 = css`
    margin-top: 0.25rem !important;
`;

export const mt2 = css`
    margin-top: 0.5rem !important;
`;

export const mt3 = css`
    margin-top: 1rem !important;
`;

export const mt4 = css`
    margin-top: 1.5rem !important;
`;

export const mt5 = css`
    margin-top: 3rem !important;
`;

export const mtAuto = css`
    margin-top: auto !important;
`;

export const mtLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0 !important;
        }
    }
`;

export const mtLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0.25rem !important;
        }
    }
`;

export const mtLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0.5rem !important;
        }
    }
`;

export const mtLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 1rem !important;
        }
    }
`;

export const mtLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 1.5rem !important;
        }
    }
`;

export const mtLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 3rem !important;
        }
    }
`;

export const mtLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-top: auto !important;
        }
    }
`;

export const mtMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0 !important;
        }
    }
`;

export const mtMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0.25rem !important;
        }
    }
`;

export const mtMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0.5rem !important;
        }
    }
`;

export const mtMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 1rem !important;
        }
    }
`;

export const mtMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 1.5rem !important;
        }
    }
`;

export const mtMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 3rem !important;
        }
    }
`;

export const mtMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-top: auto !important;
        }
    }
`;

export const mtSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0 !important;
        }
    }
`;

export const mtSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0.25rem !important;
        }
    }
`;

export const mtSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0.5rem !important;
        }
    }
`;

export const mtSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 1rem !important;
        }
    }
`;

export const mtSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 1.5rem !important;
        }
    }
`;

export const mtSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 3rem !important;
        }
    }
`;

export const mtSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-top: auto !important;
        }
    }
`;

export const mtXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0 !important;
        }
    }
`;

export const mtXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0.25rem !important;
        }
    }
`;

export const mtXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0.5rem !important;
        }
    }
`;

export const mtXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 1rem !important;
        }
    }
`;

export const mtXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 1.5rem !important;
        }
    }
`;

export const mtXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 3rem !important;
        }
    }
`;

export const mtXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-top: auto !important;
        }
    }
`;

export const mw100 = css`
    max-width: 100% !important;
`;

export const mx0 = css`
    margin-right: 0 !important;

    margin-left: 0 !important;
`;

export const mx1 = css`
    margin-right: 0.25rem !important;

    margin-left: 0.25rem !important;
`;

export const mx2 = css`
    margin-right: 0.5rem !important;

    margin-left: 0.5rem !important;
`;

export const mx3 = css`
    margin-right: 1rem !important;

    margin-left: 1rem !important;
`;

export const mx4 = css`
    margin-right: 1.5rem !important;

    margin-left: 1.5rem !important;
`;

export const mx5 = css`
    margin-right: 3rem !important;

    margin-left: 3rem !important;
`;

export const mxAuto = css`
    margin-right: auto !important;

    margin-left: auto !important;
`;

export const mxLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0 !important;
        }

        & {
            margin-left: 0 !important;
        }
    }
`;

export const mxLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0.25rem !important;
        }

        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mxLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 0.5rem !important;
        }

        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mxLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 1rem !important;
        }

        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mxLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 1.5rem !important;
        }

        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mxLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-right: 3rem !important;
        }

        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mxLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-right: auto !important;
        }

        & {
            margin-left: auto !important;
        }
    }
`;

export const mxMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0 !important;
        }

        & {
            margin-left: 0 !important;
        }
    }
`;

export const mxMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0.25rem !important;
        }

        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mxMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 0.5rem !important;
        }

        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mxMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 1rem !important;
        }

        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mxMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 1.5rem !important;
        }

        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mxMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-right: 3rem !important;
        }

        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mxMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-right: auto !important;
        }

        & {
            margin-left: auto !important;
        }
    }
`;

export const mxSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0 !important;
        }

        & {
            margin-left: 0 !important;
        }
    }
`;

export const mxSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0.25rem !important;
        }

        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mxSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 0.5rem !important;
        }

        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mxSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 1rem !important;
        }

        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mxSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 1.5rem !important;
        }

        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mxSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-right: 3rem !important;
        }

        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mxSmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-right: auto !important;
        }

        & {
            margin-left: auto !important;
        }
    }
`;

export const mxXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0 !important;
        }

        & {
            margin-left: 0 !important;
        }
    }
`;

export const mxXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0.25rem !important;
        }

        & {
            margin-left: 0.25rem !important;
        }
    }
`;

export const mxXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 0.5rem !important;
        }

        & {
            margin-left: 0.5rem !important;
        }
    }
`;

export const mxXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 1rem !important;
        }

        & {
            margin-left: 1rem !important;
        }
    }
`;

export const mxXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 1.5rem !important;
        }

        & {
            margin-left: 1.5rem !important;
        }
    }
`;

export const mxXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-right: 3rem !important;
        }

        & {
            margin-left: 3rem !important;
        }
    }
`;

export const mxXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-right: auto !important;
        }

        & {
            margin-left: auto !important;
        }
    }
`;

export const my0 = css`
    margin-top: 0 !important;

    margin-bottom: 0 !important;
`;

export const my1 = css`
    margin-top: 0.25rem !important;

    margin-bottom: 0.25rem !important;
`;

export const my2 = css`
    margin-top: 0.5rem !important;

    margin-bottom: 0.5rem !important;
`;

export const my3 = css`
    margin-top: 1rem !important;

    margin-bottom: 1rem !important;
`;

export const my4 = css`
    margin-top: 1.5rem !important;

    margin-bottom: 1.5rem !important;
`;

export const my5 = css`
    margin-top: 3rem !important;

    margin-bottom: 3rem !important;
`;

export const myAuto = css`
    margin-top: auto !important;

    margin-bottom: auto !important;
`;

export const myLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0 !important;
        }

        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const myLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0.25rem !important;
        }

        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const myLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 0.5rem !important;
        }

        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const myLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 1rem !important;
        }

        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const myLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 1.5rem !important;
        }

        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const myLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-top: 3rem !important;
        }

        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const myLgAuto = css`
    @media (min-width: 992px) {
        & {
            margin-top: auto !important;
        }

        & {
            margin-bottom: auto !important;
        }
    }
`;

export const myMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0 !important;
        }

        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const myMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0.25rem !important;
        }

        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const myMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 0.5rem !important;
        }

        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const myMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 1rem !important;
        }

        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const myMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 1.5rem !important;
        }

        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const myMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-top: 3rem !important;
        }

        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const myMdAuto = css`
    @media (min-width: 768px) {
        & {
            margin-top: auto !important;
        }

        & {
            margin-bottom: auto !important;
        }
    }
`;

export const mySm0 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0 !important;
        }

        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const mySm1 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0.25rem !important;
        }

        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const mySm2 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 0.5rem !important;
        }

        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const mySm3 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 1rem !important;
        }

        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const mySm4 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 1.5rem !important;
        }

        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const mySm5 = css`
    @media (min-width: 576px) {
        & {
            margin-top: 3rem !important;
        }

        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const mySmAuto = css`
    @media (min-width: 576px) {
        & {
            margin-top: auto !important;
        }

        & {
            margin-bottom: auto !important;
        }
    }
`;

export const myXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0 !important;
        }

        & {
            margin-bottom: 0 !important;
        }
    }
`;

export const myXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0.25rem !important;
        }

        & {
            margin-bottom: 0.25rem !important;
        }
    }
`;

export const myXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 0.5rem !important;
        }

        & {
            margin-bottom: 0.5rem !important;
        }
    }
`;

export const myXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 1rem !important;
        }

        & {
            margin-bottom: 1rem !important;
        }
    }
`;

export const myXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 1.5rem !important;
        }

        & {
            margin-bottom: 1.5rem !important;
        }
    }
`;

export const myXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-top: 3rem !important;
        }

        & {
            margin-bottom: 3rem !important;
        }
    }
`;

export const myXlAuto = css`
    @media (min-width: 1200px) {
        & {
            margin-top: auto !important;
        }

        & {
            margin-bottom: auto !important;
        }
    }
`;

export const nav = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;

export const navFill = css`
    & .nav-item {
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        text-align: center;
    }
`;

export const navJustified = css`
    & .nav-item {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -ms-flex-positive: 1;
        flex-grow: 1;
        text-align: center;
    }
`;

export const navLink = css`
    display: block;
    padding: 0.5rem 1rem;

    &:hover,
    &:focus {
        text-decoration: none;
    }

    &.disabled {
        color: #6c757d;
    }
`;

export const navPills = css`& .${navLink} {
  border-radius: 0.25rem;
}

& .${navLink}.${active}, & .${show} > .${navLink} {
  color: #fff;
  background-color: #007bff;
}

`;

export const navTabs = css`
  border-bottom: 1px solid #dee2e6;


& .nav-item {
  margin-bottom: -1px;
}

& .${navLink} {
  border: 1px solid transparent;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

& .${navLink}:hover, & .${navLink}:focus {
  border-color: #e9ecef #e9ecef #dee2e6;
}

& .${navLink}.disabled {
  color: #6c757d;
  background-color: transparent;
  border-color: transparent;
}

& .${navLink}.${active}, & .nav-item.${show} .${navLink} {
  color: #495057;
  background-color: #fff;
  border-color: #dee2e6 #dee2e6 #fff;
}

& .${dropdownMenu} {
  margin-top: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

`;

export const navbar = css`
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.5rem 1rem;

    & > .${container}, & > .${containerFluid} {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-pack: justify;
        justify-content: space-between;
    }

    @media print {
        & {
            display: none;
        }
    }
`;

export const navbarBrand = css`
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;

    &:hover,
    &:focus {
        text-decoration: none;
    }
`;

export const navbarCollapse = css`
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-align: center;
    align-items: center;
`;

export const navbarNav = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;

    & .${navLink} {
        padding-right: 0;
        padding-left: 0;
    }

    & .${dropdownMenu} {
        position: static;
        float: none;
    }
`;

export const navbarToggler = css`
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;

    &:hover,
    &:focus {
        text-decoration: none;
    }

    &:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
`;

export const navbarTogglerIcon = css`
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
`;

export const navbarText = css`
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
`;

export const navbarDark = css`& .${navbarBrand} {
  color: #fff;
}

& .${navbarBrand}:hover, & .${navbarBrand}:focus {
  color: #fff;
}

& .${navbarNav} .${navLink} {
  color: rgba(255, 255, 255, 0.5);
}

& .${navbarNav} .${navLink}:hover, & .${navbarNav} .${navLink}:focus {
  color: rgba(255, 255, 255, 0.75);
}

& .${navbarNav} .${navLink}.disabled {
  color: rgba(255, 255, 255, 0.25);
}

& .${navbarNav} .${show} > .${navLink}, & .${navbarNav} .${active} > .${navLink}, & .${navbarNav} .${navLink}.${show}, & .${navbarNav} .${navLink}.${active} {
  color: #fff;
}

& .${navbarToggler} {
  color: rgba(255, 255, 255, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

& .${navbarTogglerIcon} {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

& .${navbarText} {
  color: rgba(255, 255, 255, 0.5);
}

& .${navbarText} a {
  color: #fff;
}

& .${navbarText} a:hover, & .${navbarText} a:focus {
  color: #fff;
}

`;

export const navbarExpand = css`
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -ms-flex-pack: start;
    justify-content: flex-start;

    & > .${container}, & > .${containerFluid} {
        padding-right: 0;
        padding-left: 0;
    }

    & .${navbarNav} {
        -ms-flex-direction: row;
        flex-direction: row;
    }

    & .${navbarNav} .${dropdownMenu} {
        position: absolute;
    }

    & .${navbarNav} .${navLink} {
        padding-right: 0.5rem;
        padding-left: 0.5rem;
    }

    & > .${container}, & > .${containerFluid} {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
    }

    & .${navbarCollapse} {
        display: -ms-flexbox !important;
        display: flex !important;
        -ms-flex-preferred-size: auto;
        flex-basis: auto;
    }

    & .${navbarToggler} {
        display: none;
    }
`;

export const navbarExpandLg = css`
    @media (max-width: 991.98px) {
        & > .${container}, & > .${containerFluid} {
            padding-right: 0;
            padding-left: 0;
        }
    }

    @media (min-width: 992px) {
        & {
            -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }

        & .${navbarNav} {
            -ms-flex-direction: row;
            flex-direction: row;
        }

        & .${navbarNav} .${dropdownMenu} {
            position: absolute;
        }

        & .${navbarNav} .${navLink} {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        & > .${container}, & > .${containerFluid} {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }

        & .${navbarCollapse} {
            display: -ms-flexbox !important;
            display: flex !important;
            -ms-flex-preferred-size: auto;
            flex-basis: auto;
        }

        & .${navbarToggler} {
            display: none;
        }
    }
`;

export const navbarExpandMd = css`
    @media (max-width: 767.98px) {
        & > .${container}, & > .${containerFluid} {
            padding-right: 0;
            padding-left: 0;
        }
    }

    @media (min-width: 768px) {
        & {
            -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }

        & .${navbarNav} {
            -ms-flex-direction: row;
            flex-direction: row;
        }

        & .${navbarNav} .${dropdownMenu} {
            position: absolute;
        }

        & .${navbarNav} .${navLink} {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        & > .${container}, & > .${containerFluid} {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }

        & .${navbarCollapse} {
            display: -ms-flexbox !important;
            display: flex !important;
            -ms-flex-preferred-size: auto;
            flex-basis: auto;
        }

        & .${navbarToggler} {
            display: none;
        }
    }
`;

export const navbarExpandSm = css`
    @media (max-width: 575.98px) {
        & > .${container}, & > .${containerFluid} {
            padding-right: 0;
            padding-left: 0;
        }
    }

    @media (min-width: 576px) {
        & {
            -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }

        & .${navbarNav} {
            -ms-flex-direction: row;
            flex-direction: row;
        }

        & .${navbarNav} .${dropdownMenu} {
            position: absolute;
        }

        & .${navbarNav} .${navLink} {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        & > .${container}, & > .${containerFluid} {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }

        & .${navbarCollapse} {
            display: -ms-flexbox !important;
            display: flex !important;
            -ms-flex-preferred-size: auto;
            flex-basis: auto;
        }

        & .${navbarToggler} {
            display: none;
        }
    }
`;

export const navbarExpandXl = css`
    @media (max-width: 1199.98px) {
        & > .${container}, & > .${containerFluid} {
            padding-right: 0;
            padding-left: 0;
        }
    }

    @media (min-width: 1200px) {
        & {
            -ms-flex-flow: row nowrap;
            flex-flow: row nowrap;
            -ms-flex-pack: start;
            justify-content: flex-start;
        }

        & .${navbarNav} {
            -ms-flex-direction: row;
            flex-direction: row;
        }

        & .${navbarNav} .${dropdownMenu} {
            position: absolute;
        }

        & .${navbarNav} .${navLink} {
            padding-right: 0.5rem;
            padding-left: 0.5rem;
        }

        & > .${container}, & > .${containerFluid} {
            -ms-flex-wrap: nowrap;
            flex-wrap: nowrap;
        }

        & .${navbarCollapse} {
            display: -ms-flexbox !important;
            display: flex !important;
            -ms-flex-preferred-size: auto;
            flex-basis: auto;
        }

        & .${navbarToggler} {
            display: none;
        }
    }
`;

export const navbarLight = css`& .${navbarBrand} {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarBrand}:hover, & .${navbarBrand}:focus {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarNav} .${navLink} {
  color: rgba(0, 0, 0, 0.5);
}

& .${navbarNav} .${navLink}:hover, & .${navbarNav} .${navLink}:focus {
  color: rgba(0, 0, 0, 0.7);
}

& .${navbarNav} .${navLink}.disabled {
  color: rgba(0, 0, 0, 0.3);
}

& .${navbarNav} .${show} > .${navLink}, & .${navbarNav} .${active} > .${navLink}, & .${navbarNav} .${navLink}.${show}, & .${navbarNav} .${navLink}.${active} {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarToggler} {
  color: rgba(0, 0, 0, 0.5);
  border-color: rgba(0, 0, 0, 0.1);
}

& .${navbarTogglerIcon} {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

& .${navbarText} {
  color: rgba(0, 0, 0, 0.5);
}

& .${navbarText} a {
  color: rgba(0, 0, 0, 0.9);
}

& .${navbarText} a:hover, & .${navbarText} a:focus {
  color: rgba(0, 0, 0, 0.9);
}

`;

export const noGutters = css`
    margin-right: 0;
    margin-left: 0;

    & > .${col}, & > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }
`;

export const offset1 = css`
    margin-left: 8.333333%;
`;

export const offset2 = css`
    margin-left: 16.666667%;
`;

export const offset3 = css`
    margin-left: 25%;
`;

export const offset4 = css`
    margin-left: 33.333333%;
`;

export const offset5 = css`
    margin-left: 41.666667%;
`;

export const offset6 = css`
    margin-left: 50%;
`;

export const offset7 = css`
    margin-left: 58.333333%;
`;

export const offset8 = css`
    margin-left: 66.666667%;
`;

export const offset9 = css`
    margin-left: 75%;
`;

export const offset10 = css`
    margin-left: 83.333333%;
`;

export const offset11 = css`
    margin-left: 91.666667%;
`;

export const offsetLg0 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 0;
        }
    }
`;

export const offsetLg1 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 8.333333%;
        }
    }
`;

export const offsetLg2 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 16.666667%;
        }
    }
`;

export const offsetLg3 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 25%;
        }
    }
`;

export const offsetLg4 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 33.333333%;
        }
    }
`;

export const offsetLg5 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 41.666667%;
        }
    }
`;

export const offsetLg6 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 50%;
        }
    }
`;

export const offsetLg7 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 58.333333%;
        }
    }
`;

export const offsetLg8 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 66.666667%;
        }
    }
`;

export const offsetLg9 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 75%;
        }
    }
`;

export const offsetLg10 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 83.333333%;
        }
    }
`;

export const offsetLg11 = css`
    @media (min-width: 992px) {
        & {
            margin-left: 91.666667%;
        }
    }
`;

export const offsetMd0 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 0;
        }
    }
`;

export const offsetMd1 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 8.333333%;
        }
    }
`;

export const offsetMd2 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 16.666667%;
        }
    }
`;

export const offsetMd3 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 25%;
        }
    }
`;

export const offsetMd4 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 33.333333%;
        }
    }
`;

export const offsetMd5 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 41.666667%;
        }
    }
`;

export const offsetMd6 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 50%;
        }
    }
`;

export const offsetMd7 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 58.333333%;
        }
    }
`;

export const offsetMd8 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 66.666667%;
        }
    }
`;

export const offsetMd9 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 75%;
        }
    }
`;

export const offsetMd10 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 83.333333%;
        }
    }
`;

export const offsetMd11 = css`
    @media (min-width: 768px) {
        & {
            margin-left: 91.666667%;
        }
    }
`;

export const offsetSm0 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 0;
        }
    }
`;

export const offsetSm1 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 8.333333%;
        }
    }
`;

export const offsetSm2 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 16.666667%;
        }
    }
`;

export const offsetSm3 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 25%;
        }
    }
`;

export const offsetSm4 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 33.333333%;
        }
    }
`;

export const offsetSm5 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 41.666667%;
        }
    }
`;

export const offsetSm6 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 50%;
        }
    }
`;

export const offsetSm7 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 58.333333%;
        }
    }
`;

export const offsetSm8 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 66.666667%;
        }
    }
`;

export const offsetSm9 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 75%;
        }
    }
`;

export const offsetSm10 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 83.333333%;
        }
    }
`;

export const offsetSm11 = css`
    @media (min-width: 576px) {
        & {
            margin-left: 91.666667%;
        }
    }
`;

export const offsetXl0 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 0;
        }
    }
`;

export const offsetXl1 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 8.333333%;
        }
    }
`;

export const offsetXl2 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 16.666667%;
        }
    }
`;

export const offsetXl3 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 25%;
        }
    }
`;

export const offsetXl4 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 33.333333%;
        }
    }
`;

export const offsetXl5 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 41.666667%;
        }
    }
`;

export const offsetXl6 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 50%;
        }
    }
`;

export const offsetXl7 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 58.333333%;
        }
    }
`;

export const offsetXl8 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 66.666667%;
        }
    }
`;

export const offsetXl9 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 75%;
        }
    }
`;

export const offsetXl10 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 83.333333%;
        }
    }
`;

export const offsetXl11 = css`
    @media (min-width: 1200px) {
        & {
            margin-left: 91.666667%;
        }
    }
`;

export const order0 = css`
    -ms-flex-order: 0;
    order: 0;
`;

export const order1 = css`
    -ms-flex-order: 1;
    order: 1;
`;

export const order2 = css`
    -ms-flex-order: 2;
    order: 2;
`;

export const order3 = css`
    -ms-flex-order: 3;
    order: 3;
`;

export const order4 = css`
    -ms-flex-order: 4;
    order: 4;
`;

export const order5 = css`
    -ms-flex-order: 5;
    order: 5;
`;

export const order6 = css`
    -ms-flex-order: 6;
    order: 6;
`;

export const order7 = css`
    -ms-flex-order: 7;
    order: 7;
`;

export const order8 = css`
    -ms-flex-order: 8;
    order: 8;
`;

export const order9 = css`
    -ms-flex-order: 9;
    order: 9;
`;

export const order10 = css`
    -ms-flex-order: 10;
    order: 10;
`;

export const order11 = css`
    -ms-flex-order: 11;
    order: 11;
`;

export const order12 = css`
    -ms-flex-order: 12;
    order: 12;
`;

export const orderFirst = css`
    -ms-flex-order: -1;
    order: -1;
`;

export const orderLast = css`
    -ms-flex-order: 13;
    order: 13;
`;

export const orderLg0 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 0;
            order: 0;
        }
    }
`;

export const orderLg1 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

export const orderLg2 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 2;
            order: 2;
        }
    }
`;

export const orderLg3 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 3;
            order: 3;
        }
    }
`;

export const orderLg4 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 4;
            order: 4;
        }
    }
`;

export const orderLg5 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 5;
            order: 5;
        }
    }
`;

export const orderLg6 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 6;
            order: 6;
        }
    }
`;

export const orderLg7 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 7;
            order: 7;
        }
    }
`;

export const orderLg8 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 8;
            order: 8;
        }
    }
`;

export const orderLg9 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 9;
            order: 9;
        }
    }
`;

export const orderLg10 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 10;
            order: 10;
        }
    }
`;

export const orderLg11 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 11;
            order: 11;
        }
    }
`;

export const orderLg12 = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 12;
            order: 12;
        }
    }
`;

export const orderLgFirst = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: -1;
            order: -1;
        }
    }
`;

export const orderLgLast = css`
    @media (min-width: 992px) {
        & {
            -ms-flex-order: 13;
            order: 13;
        }
    }
`;

export const orderMd0 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 0;
            order: 0;
        }
    }
`;

export const orderMd1 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

export const orderMd2 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 2;
            order: 2;
        }
    }
`;

export const orderMd3 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 3;
            order: 3;
        }
    }
`;

export const orderMd4 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 4;
            order: 4;
        }
    }
`;

export const orderMd5 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 5;
            order: 5;
        }
    }
`;

export const orderMd6 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 6;
            order: 6;
        }
    }
`;

export const orderMd7 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 7;
            order: 7;
        }
    }
`;

export const orderMd8 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 8;
            order: 8;
        }
    }
`;

export const orderMd9 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 9;
            order: 9;
        }
    }
`;

export const orderMd10 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 10;
            order: 10;
        }
    }
`;

export const orderMd11 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 11;
            order: 11;
        }
    }
`;

export const orderMd12 = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 12;
            order: 12;
        }
    }
`;

export const orderMdFirst = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: -1;
            order: -1;
        }
    }
`;

export const orderMdLast = css`
    @media (min-width: 768px) {
        & {
            -ms-flex-order: 13;
            order: 13;
        }
    }
`;

export const orderSm0 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 0;
            order: 0;
        }
    }
`;

export const orderSm1 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

export const orderSm2 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 2;
            order: 2;
        }
    }
`;

export const orderSm3 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 3;
            order: 3;
        }
    }
`;

export const orderSm4 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 4;
            order: 4;
        }
    }
`;

export const orderSm5 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 5;
            order: 5;
        }
    }
`;

export const orderSm6 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 6;
            order: 6;
        }
    }
`;

export const orderSm7 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 7;
            order: 7;
        }
    }
`;

export const orderSm8 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 8;
            order: 8;
        }
    }
`;

export const orderSm9 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 9;
            order: 9;
        }
    }
`;

export const orderSm10 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 10;
            order: 10;
        }
    }
`;

export const orderSm11 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 11;
            order: 11;
        }
    }
`;

export const orderSm12 = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 12;
            order: 12;
        }
    }
`;

export const orderSmFirst = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: -1;
            order: -1;
        }
    }
`;

export const orderSmLast = css`
    @media (min-width: 576px) {
        & {
            -ms-flex-order: 13;
            order: 13;
        }
    }
`;

export const orderXl0 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 0;
            order: 0;
        }
    }
`;

export const orderXl1 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 1;
            order: 1;
        }
    }
`;

export const orderXl2 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 2;
            order: 2;
        }
    }
`;

export const orderXl3 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 3;
            order: 3;
        }
    }
`;

export const orderXl4 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 4;
            order: 4;
        }
    }
`;

export const orderXl5 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 5;
            order: 5;
        }
    }
`;

export const orderXl6 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 6;
            order: 6;
        }
    }
`;

export const orderXl7 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 7;
            order: 7;
        }
    }
`;

export const orderXl8 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 8;
            order: 8;
        }
    }
`;

export const orderXl9 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 9;
            order: 9;
        }
    }
`;

export const orderXl10 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 10;
            order: 10;
        }
    }
`;

export const orderXl11 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 11;
            order: 11;
        }
    }
`;

export const orderXl12 = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 12;
            order: 12;
        }
    }
`;

export const orderXlFirst = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: -1;
            order: -1;
        }
    }
`;

export const orderXlLast = css`
    @media (min-width: 1200px) {
        & {
            -ms-flex-order: 13;
            order: 13;
        }
    }
`;

export const p0 = css`
    padding: 0 !important;
`;

export const p1 = css`
    padding: 0.25rem !important;
`;

export const p2 = css`
    padding: 0.5rem !important;
`;

export const p3 = css`
    padding: 1rem !important;
`;

export const p4 = css`
    padding: 1.5rem !important;
`;

export const p5 = css`
    padding: 3rem !important;
`;

export const pLg0 = css`
    @media (min-width: 992px) {
        & {
            padding: 0 !important;
        }
    }
`;

export const pLg1 = css`
    @media (min-width: 992px) {
        & {
            padding: 0.25rem !important;
        }
    }
`;

export const pLg2 = css`
    @media (min-width: 992px) {
        & {
            padding: 0.5rem !important;
        }
    }
`;

export const pLg3 = css`
    @media (min-width: 992px) {
        & {
            padding: 1rem !important;
        }
    }
`;

export const pLg4 = css`
    @media (min-width: 992px) {
        & {
            padding: 1.5rem !important;
        }
    }
`;

export const pLg5 = css`
    @media (min-width: 992px) {
        & {
            padding: 3rem !important;
        }
    }
`;

export const pMd0 = css`
    @media (min-width: 768px) {
        & {
            padding: 0 !important;
        }
    }
`;

export const pMd1 = css`
    @media (min-width: 768px) {
        & {
            padding: 0.25rem !important;
        }
    }
`;

export const pMd2 = css`
    @media (min-width: 768px) {
        & {
            padding: 0.5rem !important;
        }
    }
`;

export const pMd3 = css`
    @media (min-width: 768px) {
        & {
            padding: 1rem !important;
        }
    }
`;

export const pMd4 = css`
    @media (min-width: 768px) {
        & {
            padding: 1.5rem !important;
        }
    }
`;

export const pMd5 = css`
    @media (min-width: 768px) {
        & {
            padding: 3rem !important;
        }
    }
`;

export const pSm0 = css`
    @media (min-width: 576px) {
        & {
            padding: 0 !important;
        }
    }
`;

export const pSm1 = css`
    @media (min-width: 576px) {
        & {
            padding: 0.25rem !important;
        }
    }
`;

export const pSm2 = css`
    @media (min-width: 576px) {
        & {
            padding: 0.5rem !important;
        }
    }
`;

export const pSm3 = css`
    @media (min-width: 576px) {
        & {
            padding: 1rem !important;
        }
    }
`;

export const pSm4 = css`
    @media (min-width: 576px) {
        & {
            padding: 1.5rem !important;
        }
    }
`;

export const pSm5 = css`
    @media (min-width: 576px) {
        & {
            padding: 3rem !important;
        }
    }
`;

export const pXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding: 0 !important;
        }
    }
`;

export const pXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding: 0.25rem !important;
        }
    }
`;

export const pXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding: 0.5rem !important;
        }
    }
`;

export const pXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding: 1rem !important;
        }
    }
`;

export const pXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding: 1.5rem !important;
        }
    }
`;

export const pXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding: 3rem !important;
        }
    }
`;

export const pageLink = css`
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;

    &:hover {
        z-index: 2;
        color: #0056b3;
        text-decoration: none;
        background-color: #e9ecef;
        border-color: #dee2e6;
    }

    &:focus {
        z-index: 2;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    &:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
`;

export const pageItem = css`
    &:first-child .${pageLink} {
        margin-left: 0;
        border-top-left-radius: 0.25rem;
        border-bottom-left-radius: 0.25rem;
    }

    &:last-child .${pageLink} {
        border-top-right-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }

    &.${active} .${pageLink} {
        z-index: 1;
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    &.disabled .${pageLink} {
        color: #6c757d;
        pointer-events: none;
        cursor: auto;
        background-color: #fff;
        border-color: #dee2e6;
    }
`;

export const pagination = css`
    display: -ms-flexbox;
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 0.25rem;
`;

export const paginationLg = css`
    & .${pageLink} {
        padding: 0.75rem 1.5rem;
        font-size: 1.25rem;
        line-height: 1.5;
    }

    & .${pageItem}:first-child .${pageLink} {
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
    }

    & .${pageItem}:last-child .${pageLink} {
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
    }
`;

export const paginationSm = css`
    & .${pageLink} {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.5;
    }

    & .${pageItem}:first-child .${pageLink} {
        border-top-left-radius: 0.2rem;
        border-bottom-left-radius: 0.2rem;
    }

    & .${pageItem}:last-child .${pageLink} {
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
    }
`;

export const pb0 = css`
    padding-bottom: 0 !important;
`;

export const pb1 = css`
    padding-bottom: 0.25rem !important;
`;

export const pb2 = css`
    padding-bottom: 0.5rem !important;
`;

export const pb3 = css`
    padding-bottom: 1rem !important;
`;

export const pb4 = css`
    padding-bottom: 1.5rem !important;
`;

export const pb5 = css`
    padding-bottom: 3rem !important;
`;

export const pbLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const pbLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pbLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pbLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const pbLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pbLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const pbMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const pbMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pbMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pbMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const pbMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pbMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const pbSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const pbSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pbSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pbSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const pbSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pbSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const pbXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const pbXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pbXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pbXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const pbXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pbXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const pl0 = css`
    padding-left: 0 !important;
`;

export const pl1 = css`
    padding-left: 0.25rem !important;
`;

export const pl2 = css`
    padding-left: 0.5rem !important;
`;

export const pl3 = css`
    padding-left: 1rem !important;
`;

export const pl4 = css`
    padding-left: 1.5rem !important;
`;

export const pl5 = css`
    padding-left: 3rem !important;
`;

export const plLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 0 !important;
        }
    }
`;

export const plLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const plLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const plLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 1rem !important;
        }
    }
`;

export const plLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const plLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-left: 3rem !important;
        }
    }
`;

export const plMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 0 !important;
        }
    }
`;

export const plMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const plMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const plMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 1rem !important;
        }
    }
`;

export const plMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const plMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-left: 3rem !important;
        }
    }
`;

export const plSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 0 !important;
        }
    }
`;

export const plSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const plSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const plSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 1rem !important;
        }
    }
`;

export const plSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const plSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-left: 3rem !important;
        }
    }
`;

export const plXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 0 !important;
        }
    }
`;

export const plXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const plXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const plXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 1rem !important;
        }
    }
`;

export const plXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const plXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-left: 3rem !important;
        }
    }
`;

export const popover = css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1060;
    display: block;
    max-width: 276px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol";
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;

    & .arrow {
        position: absolute;
        display: block;
        width: 1rem;
        height: 0.5rem;
        margin: 0 0.3rem;
    }

    & .arrow::before,
    & .arrow::after {
        position: absolute;
        display: block;
        content: "";
        border-color: transparent;
        border-style: solid;
    }
`;

export const popoverBody = css`
    padding: 0.5rem 0.75rem;
    color: #212529;
`;

export const positionAbsolute = css`
    position: absolute !important;
`;

export const positionFixed = css`
    position: fixed !important;
`;

export const positionRelative = css`
    position: relative !important;
`;

export const positionStatic = css`
    position: static !important;
`;

export const positionSticky = css`
    position: -webkit-sticky !important;
    position: sticky !important;
`;

export const pr0 = css`
    padding-right: 0 !important;
`;

export const pr1 = css`
    padding-right: 0.25rem !important;
`;

export const pr2 = css`
    padding-right: 0.5rem !important;
`;

export const pr3 = css`
    padding-right: 1rem !important;
`;

export const pr4 = css`
    padding-right: 1.5rem !important;
`;

export const pr5 = css`
    padding-right: 3rem !important;
`;

export const prLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0 !important;
        }
    }
`;

export const prLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0.25rem !important;
        }
    }
`;

export const prLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0.5rem !important;
        }
    }
`;

export const prLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 1rem !important;
        }
    }
`;

export const prLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 1.5rem !important;
        }
    }
`;

export const prLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 3rem !important;
        }
    }
`;

export const prMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0 !important;
        }
    }
`;

export const prMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0.25rem !important;
        }
    }
`;

export const prMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0.5rem !important;
        }
    }
`;

export const prMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 1rem !important;
        }
    }
`;

export const prMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 1.5rem !important;
        }
    }
`;

export const prMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 3rem !important;
        }
    }
`;

export const prSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0 !important;
        }
    }
`;

export const prSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0.25rem !important;
        }
    }
`;

export const prSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0.5rem !important;
        }
    }
`;

export const prSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 1rem !important;
        }
    }
`;

export const prSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 1.5rem !important;
        }
    }
`;

export const prSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 3rem !important;
        }
    }
`;

export const prXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0 !important;
        }
    }
`;

export const prXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0.25rem !important;
        }
    }
`;

export const prXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0.5rem !important;
        }
    }
`;

export const prXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 1rem !important;
        }
    }
`;

export const prXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 1.5rem !important;
        }
    }
`;

export const prXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 3rem !important;
        }
    }
`;

export const preScrollable = css`
    max-height: 340px;
    overflow-y: scroll;
`;

export const progress = css`
    display: -ms-flexbox;
    display: flex;
    height: 1rem;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.25rem;
`;

export const progressBar = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #007bff;
    transition: width 0.6s ease;

    @media screen and (prefers-reduced-motion: reduce) {
        & {
            transition: none;
        }
    }
`;

export const progressBarAnimated = css`
    -webkit-animation: progress-bar-stripes 1s linear infinite;
    animation: progress-bar-stripes 1s linear infinite;
`;

export const progressBarStriped = css`
    background-image: linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.15) 75%,
        transparent 75%,
        transparent
    );
    background-size: 1rem 1rem;
`;

export const pt0 = css`
    padding-top: 0 !important;
`;

export const pt1 = css`
    padding-top: 0.25rem !important;
`;

export const pt2 = css`
    padding-top: 0.5rem !important;
`;

export const pt3 = css`
    padding-top: 1rem !important;
`;

export const pt4 = css`
    padding-top: 1.5rem !important;
`;

export const pt5 = css`
    padding-top: 3rem !important;
`;

export const ptLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0 !important;
        }
    }
`;

export const ptLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0.25rem !important;
        }
    }
`;

export const ptLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0.5rem !important;
        }
    }
`;

export const ptLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 1rem !important;
        }
    }
`;

export const ptLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 1.5rem !important;
        }
    }
`;

export const ptLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 3rem !important;
        }
    }
`;

export const ptMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0 !important;
        }
    }
`;

export const ptMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0.25rem !important;
        }
    }
`;

export const ptMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0.5rem !important;
        }
    }
`;

export const ptMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 1rem !important;
        }
    }
`;

export const ptMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 1.5rem !important;
        }
    }
`;

export const ptMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 3rem !important;
        }
    }
`;

export const ptSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0 !important;
        }
    }
`;

export const ptSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0.25rem !important;
        }
    }
`;

export const ptSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0.5rem !important;
        }
    }
`;

export const ptSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 1rem !important;
        }
    }
`;

export const ptSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 1.5rem !important;
        }
    }
`;

export const ptSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 3rem !important;
        }
    }
`;

export const ptXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0 !important;
        }
    }
`;

export const ptXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0.25rem !important;
        }
    }
`;

export const ptXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0.5rem !important;
        }
    }
`;

export const ptXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 1rem !important;
        }
    }
`;

export const ptXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 1.5rem !important;
        }
    }
`;

export const ptXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 3rem !important;
        }
    }
`;

export const px0 = css`
    padding-right: 0 !important;

    padding-left: 0 !important;
`;

export const px1 = css`
    padding-right: 0.25rem !important;

    padding-left: 0.25rem !important;
`;

export const px2 = css`
    padding-right: 0.5rem !important;

    padding-left: 0.5rem !important;
`;

export const px3 = css`
    padding-right: 1rem !important;

    padding-left: 1rem !important;
`;

export const px4 = css`
    padding-right: 1.5rem !important;

    padding-left: 1.5rem !important;
`;

export const px5 = css`
    padding-right: 3rem !important;

    padding-left: 3rem !important;
`;

export const pxLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0 !important;
        }

        & {
            padding-left: 0 !important;
        }
    }
`;

export const pxLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0.25rem !important;
        }

        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const pxLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 0.5rem !important;
        }

        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const pxLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 1rem !important;
        }

        & {
            padding-left: 1rem !important;
        }
    }
`;

export const pxLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 1.5rem !important;
        }

        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const pxLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-right: 3rem !important;
        }

        & {
            padding-left: 3rem !important;
        }
    }
`;

export const pxMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0 !important;
        }

        & {
            padding-left: 0 !important;
        }
    }
`;

export const pxMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0.25rem !important;
        }

        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const pxMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 0.5rem !important;
        }

        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const pxMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 1rem !important;
        }

        & {
            padding-left: 1rem !important;
        }
    }
`;

export const pxMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 1.5rem !important;
        }

        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const pxMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-right: 3rem !important;
        }

        & {
            padding-left: 3rem !important;
        }
    }
`;

export const pxSm0 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0 !important;
        }

        & {
            padding-left: 0 !important;
        }
    }
`;

export const pxSm1 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0.25rem !important;
        }

        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const pxSm2 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 0.5rem !important;
        }

        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const pxSm3 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 1rem !important;
        }

        & {
            padding-left: 1rem !important;
        }
    }
`;

export const pxSm4 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 1.5rem !important;
        }

        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const pxSm5 = css`
    @media (min-width: 576px) {
        & {
            padding-right: 3rem !important;
        }

        & {
            padding-left: 3rem !important;
        }
    }
`;

export const pxXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0 !important;
        }

        & {
            padding-left: 0 !important;
        }
    }
`;

export const pxXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0.25rem !important;
        }

        & {
            padding-left: 0.25rem !important;
        }
    }
`;

export const pxXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 0.5rem !important;
        }

        & {
            padding-left: 0.5rem !important;
        }
    }
`;

export const pxXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 1rem !important;
        }

        & {
            padding-left: 1rem !important;
        }
    }
`;

export const pxXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 1.5rem !important;
        }

        & {
            padding-left: 1.5rem !important;
        }
    }
`;

export const pxXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-right: 3rem !important;
        }

        & {
            padding-left: 3rem !important;
        }
    }
`;

export const py0 = css`
    padding-top: 0 !important;

    padding-bottom: 0 !important;
`;

export const py1 = css`
    padding-top: 0.25rem !important;

    padding-bottom: 0.25rem !important;
`;

export const py2 = css`
    padding-top: 0.5rem !important;

    padding-bottom: 0.5rem !important;
`;

export const py3 = css`
    padding-top: 1rem !important;

    padding-bottom: 1rem !important;
`;

export const py4 = css`
    padding-top: 1.5rem !important;

    padding-bottom: 1.5rem !important;
`;

export const py5 = css`
    padding-top: 3rem !important;

    padding-bottom: 3rem !important;
`;

export const pyLg0 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0 !important;
        }

        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const pyLg1 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0.25rem !important;
        }

        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pyLg2 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 0.5rem !important;
        }

        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pyLg3 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 1rem !important;
        }

        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const pyLg4 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 1.5rem !important;
        }

        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pyLg5 = css`
    @media (min-width: 992px) {
        & {
            padding-top: 3rem !important;
        }

        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const pyMd0 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0 !important;
        }

        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const pyMd1 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0.25rem !important;
        }

        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pyMd2 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 0.5rem !important;
        }

        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pyMd3 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 1rem !important;
        }

        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const pyMd4 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 1.5rem !important;
        }

        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pyMd5 = css`
    @media (min-width: 768px) {
        & {
            padding-top: 3rem !important;
        }

        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const pySm0 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0 !important;
        }

        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const pySm1 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0.25rem !important;
        }

        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pySm2 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 0.5rem !important;
        }

        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pySm3 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 1rem !important;
        }

        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const pySm4 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 1.5rem !important;
        }

        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pySm5 = css`
    @media (min-width: 576px) {
        & {
            padding-top: 3rem !important;
        }

        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const pyXl0 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0 !important;
        }

        & {
            padding-bottom: 0 !important;
        }
    }
`;

export const pyXl1 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0.25rem !important;
        }

        & {
            padding-bottom: 0.25rem !important;
        }
    }
`;

export const pyXl2 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 0.5rem !important;
        }

        & {
            padding-bottom: 0.5rem !important;
        }
    }
`;

export const pyXl3 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 1rem !important;
        }

        & {
            padding-bottom: 1rem !important;
        }
    }
`;

export const pyXl4 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 1.5rem !important;
        }

        & {
            padding-bottom: 1.5rem !important;
        }
    }
`;

export const pyXl5 = css`
    @media (min-width: 1200px) {
        & {
            padding-top: 3rem !important;
        }

        & {
            padding-bottom: 3rem !important;
        }
    }
`;

export const rounded = css`
    border-radius: 0.25rem !important;
`;

export const rounded0 = css`
    border-radius: 0 !important;
`;

export const roundedBottom = css`
    border-bottom-right-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
`;

export const roundedCircle = css`
    border-radius: 50% !important;
`;

export const roundedLeft = css`
    border-top-left-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
`;

export const roundedRight = css`
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
`;

export const roundedTop = css`
    border-top-left-radius: 0.25rem !important;
    border-top-right-radius: 0.25rem !important;
`;

export const row = css`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`;

export const shadow = css`
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;

export const shadowLg = css`
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
`;

export const shadowNone = css`
    box-shadow: none !important;
`;

export const shadowSm = css`
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
`;

export const small = css`
    font-size: 80%;
    font-weight: 400;
`;

export const srOnly = css`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
`;

export const srOnlyFocusable = css`
    &:active,
    &:focus {
        position: static;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
    }
`;

export const stickyTop = css`
    @supports ((position: -webkit-sticky) or (position: sticky)) {
        & {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            z-index: 1020;
        }
    }
`;

export const tabContent = css`
    & > .tab-pane {
        display: none;
    }

    & > .${active} {
        display: block;
    }
`;

export const table = css`
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;

    & th,
    & td {
        padding: 0.75rem;
        vertical-align: top;
        border-top: 1px solid #dee2e6;
    }

    & thead th {
        vertical-align: bottom;
        border-bottom: 2px solid #dee2e6;
    }

    & tbody + tbody {
        border-top: 2px solid #dee2e6;
    }

    & & {
        background-color: #fff;
    }

    & .thead-dark th {
        color: #fff;
        background-color: #212529;
        border-color: #32383e;
    }

    & .thead-light th {
        color: #495057;
        background-color: #e9ecef;
        border-color: #dee2e6;
    }

    @media print {
        & {
            border-collapse: collapse !important;
        }

        & td,
        & th {
            background-color: #fff !important;
        }

        & .thead-dark th {
            color: inherit;
            border-color: #dee2e6;
        }
    }
`;

export const tableActive = css`
    &,
    & > th,
    & > td {
        background-color: rgba(0, 0, 0, 0.075);
    }
`;

export const tableBordered = css`
    border: 1px solid #dee2e6;

    & th,
    & td {
        border: 1px solid #dee2e6;
    }

    & thead th,
    & thead td {
        border-bottom-width: 2px;
    }

    @media print {
        & th,
        & td {
            border: 1px solid #dee2e6 !important;
        }
    }
`;

export const tableBorderless = css`
    & th,
    & td,
    & thead th,
    & tbody + tbody {
        border: 0;
    }
`;

export const tableDanger = css`
    &,
    & > th,
    & > td {
        background-color: #f5c6cb;
    }
`;

export const tableStriped = css`
    & tbody tr:nth-of-type(odd) {
        background-color: rgba(0, 0, 0, 0.05);
    }
`;

export const tableHover = css`
    & tbody tr:hover {
        background-color: rgba(0, 0, 0, 0.075);
    }

    & .${tablePrimary}:hover {
        background-color: #9fcdff;
    }

    & .${tablePrimary}:hover > td,
    & .${tablePrimary}:hover > th {
        background-color: #9fcdff;
    }

    & .${tableSecondary}:hover {
        background-color: #c8cbcf;
    }

    & .${tableSecondary}:hover > td,
    & .${tableSecondary}:hover > th {
        background-color: #c8cbcf;
    }

    & .${tableSuccess}:hover {
        background-color: #b1dfbb;
    }

    & .${tableSuccess}:hover > td,
    & .${tableSuccess}:hover > th {
        background-color: #b1dfbb;
    }

    & .${tableInfo}:hover {
        background-color: #abdde5;
    }

    & .${tableInfo}:hover > td,
    & .${tableInfo}:hover > th {
        background-color: #abdde5;
    }

    & .${tableWarning}:hover {
        background-color: #ffe8a1;
    }

    & .${tableWarning}:hover > td,
    & .${tableWarning}:hover > th {
        background-color: #ffe8a1;
    }

    & .${tableDanger}:hover {
        background-color: #f1b0b7;
    }

    & .${tableDanger}:hover > td,
    & .${tableDanger}:hover > th {
        background-color: #f1b0b7;
    }

    & .${tableLight}:hover {
        background-color: #ececf6;
    }

    & .${tableLight}:hover > td,
    & .${tableLight}:hover > th {
        background-color: #ececf6;
    }

    & .${tableDark}:hover {
        background-color: #b9bbbe;
    }

    & .${tableDark}:hover > td,
    & .${tableDark}:hover > th {
        background-color: #b9bbbe;
    }

    & .${tableActive}:hover {
        background-color: rgba(0, 0, 0, 0.075);
    }

    & .${tableActive}:hover > td,
    & .${tableActive}:hover > th {
        background-color: rgba(0, 0, 0, 0.075);
    }
`;

export const tableDark = css`
    &,
    & > th,
    & > td {
        background-color: #c6c8ca;
    }

    color: #fff;
    background-color: #212529;

    & th,
    & td,
    & thead th {
        border-color: #32383e;
    }

    &.${tableBordered} {
        border: 0;
    }

    &.${tableStriped} tbody tr:nth-of-type(odd) {
        background-color: rgba(255, 255, 255, 0.05);
    }

    &.${tableHover} tbody tr:hover {
        background-color: rgba(255, 255, 255, 0.075);
    }

    @media print {
        & {
            color: inherit;
        }

        & th,
        & td,
        & thead th,
        & tbody + tbody {
            border-color: #dee2e6;
        }
    }
`;

export const tablePrimary = css`
    &,
    & > th,
    & > td {
        background-color: #b8daff;
    }
`;

export const tableSecondary = css`
    &,
    & > th,
    & > td {
        background-color: #d6d8db;
    }
`;

export const tableSuccess = css`
    &,
    & > th,
    & > td {
        background-color: #c3e6cb;
    }
`;

export const tableInfo = css`
    &,
    & > th,
    & > td {
        background-color: #bee5eb;
    }
`;

export const tableWarning = css`
    &,
    & > th,
    & > td {
        background-color: #ffeeba;
    }
`;

export const tableLight = css`
    &,
    & > th,
    & > td {
        background-color: #fdfdfe;
    }
`;

export const tableResponsive = css`
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    & > .${tableBordered} {
        border: 0;
    }
`;

export const tableResponsiveLg = css`
    @media (max-width: 991.98px) {
        & {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }

        & > .${tableBordered} {
            border: 0;
        }
    }
`;

export const tableResponsiveMd = css`
    @media (max-width: 767.98px) {
        & {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }

        & > .${tableBordered} {
            border: 0;
        }
    }
`;

export const tableResponsiveSm = css`
    @media (max-width: 575.98px) {
        & {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }

        & > .${tableBordered} {
            border: 0;
        }
    }
`;

export const tableResponsiveXl = css`
    @media (max-width: 1199.98px) {
        & {
            display: block;
            width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }

        & > .${tableBordered} {
            border: 0;
        }
    }
`;

export const tableSm = css`
    & th,
    & td {
        padding: 0.3rem;
    }
`;

export const textBlack50 = css`
    color: rgba(0, 0, 0, 0.5) !important;
`;

export const textBody = css`
    color: #212529 !important;
`;

export const textCapitalize = css`
    text-transform: capitalize !important;
`;

export const textCenter = css`
    text-align: center !important;
`;

export const textDanger = css`
    color: #dc3545 !important;

    a&:hover,
    a&:focus {
        color: #bd2130 !important;
    }
`;

export const textDark = css`
    color: #343a40 !important;

    a&:hover,
    a&:focus {
        color: #1d2124 !important;
    }
`;

export const textHide = css`
    font: 0/0 a;
    color: transparent;
    text-shadow: none;
    background-color: transparent;
    border: 0;
`;

export const textInfo = css`
    color: #17a2b8 !important;

    a&:hover,
    a&:focus {
        color: #117a8b !important;
    }
`;

export const textJustify = css`
    text-align: justify !important;
`;

export const textLeft = css`
    text-align: left !important;
`;

export const textLgCenter = css`
    @media (min-width: 992px) {
        & {
            text-align: center !important;
        }
    }
`;

export const textLgLeft = css`
    @media (min-width: 992px) {
        & {
            text-align: left !important;
        }
    }
`;

export const textLgRight = css`
    @media (min-width: 992px) {
        & {
            text-align: right !important;
        }
    }
`;

export const textLight = css`
    color: #f8f9fa !important;

    a&:hover,
    a&:focus {
        color: #dae0e5 !important;
    }
`;

export const textLowercase = css`
    text-transform: lowercase !important;
`;

export const textMdCenter = css`
    @media (min-width: 768px) {
        & {
            text-align: center !important;
        }
    }
`;

export const textMdLeft = css`
    @media (min-width: 768px) {
        & {
            text-align: left !important;
        }
    }
`;

export const textMdRight = css`
    @media (min-width: 768px) {
        & {
            text-align: right !important;
        }
    }
`;

export const textMonospace = css`
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
        "Courier New", monospace;
`;

export const textMuted = css`
    color: #6c757d !important;
`;

export const textNowrap = css`
    white-space: nowrap !important;
`;

export const textPrimary = css`
    color: #007bff !important;

    a&:hover,
    a&:focus {
        color: #0062cc !important;
    }
`;

export const textRight = css`
    text-align: right !important;
`;

export const textSecondary = css`
    color: #6c757d !important;

    a&:hover,
    a&:focus {
        color: #545b62 !important;
    }
`;

export const textSmCenter = css`
    @media (min-width: 576px) {
        & {
            text-align: center !important;
        }
    }
`;

export const textSmLeft = css`
    @media (min-width: 576px) {
        & {
            text-align: left !important;
        }
    }
`;

export const textSmRight = css`
    @media (min-width: 576px) {
        & {
            text-align: right !important;
        }
    }
`;

export const textSuccess = css`
    color: #28a745 !important;

    a&:hover,
    a&:focus {
        color: #1e7e34 !important;
    }
`;

export const textTruncate = css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const textUppercase = css`
    text-transform: uppercase !important;
`;

export const textWarning = css`
    color: #ffc107 !important;

    a&:hover,
    a&:focus {
        color: #d39e00 !important;
    }
`;

export const textWhite = css`
    color: #fff !important;
`;

export const textWhite50 = css`
    color: rgba(255, 255, 255, 0.5) !important;
`;

export const textXlCenter = css`
    @media (min-width: 1200px) {
        & {
            text-align: center !important;
        }
    }
`;

export const textXlLeft = css`
    @media (min-width: 1200px) {
        & {
            text-align: left !important;
        }
    }
`;

export const textXlRight = css`
    @media (min-width: 1200px) {
        & {
            text-align: right !important;
        }
    }
`;

export const tooltip = css`
    position: absolute;
    z-index: 1070;
    display: block;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol";
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    letter-spacing: normal;
    word-break: normal;
    word-spacing: normal;
    white-space: normal;
    line-break: auto;
    font-size: 0.875rem;
    word-wrap: break-word;
    opacity: 0;

    &.${show} {
        opacity: 0.9;
    }

    & .arrow {
        position: absolute;
        display: block;
        width: 0.8rem;
        height: 0.4rem;
    }

    & .arrow::before {
        position: absolute;
        content: "";
        border-color: transparent;
        border-style: solid;
    }
`;

export const tooltipInner = css`
    max-width: 200px;
    padding: 0.25rem 0.5rem;
    color: #fff;
    text-align: center;
    background-color: #000;
    border-radius: 0.25rem;
`;

export const visible = css`
    visibility: visible !important;
`;

export const w25 = css`
    width: 25% !important;
`;

export const w50 = css`
    width: 50% !important;
`;

export const w75 = css`
    width: 75% !important;
`;

export const w100 = css`
    width: 100% !important;
`;

export const wAuto = css`
    width: auto !important;
`;

export const wasValidated = css`
    & .${formControl}:valid, & .${customSelect}:valid {
        border-color: #28a745;
    }

    & .${formControl}:valid:focus, & .${customSelect}:valid:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    &
        .${formControl}:valid
        ~ .${validFeedback},
        &
        .${formControl}:valid
        ~ .${validTooltip},
        &
        .${customSelect}:valid
        ~ .${validFeedback},
        &
        .${customSelect}:valid
        ~ .${validTooltip} {
        display: block;
    }

    &
        .${formControlFile}:valid
        ~ .${validFeedback},
        &
        .${formControlFile}:valid
        ~ .${validTooltip} {
        display: block;
    }

    & .${formCheckInput}:valid ~ .${formCheckLabel} {
        color: #28a745;
    }

    &
        .${formCheckInput}:valid
        ~ .${validFeedback},
        &
        .${formCheckInput}:valid
        ~ .${validTooltip} {
        display: block;
    }

    & .${customControlInput}:valid ~ .${customControlLabel} {
        color: #28a745;
    }

    & .${customControlInput}:valid ~ .${customControlLabel}::before {
        background-color: #71dd8a;
    }

    &
        .${customControlInput}:valid
        ~ .${validFeedback},
        &
        .${customControlInput}:valid
        ~ .${validTooltip} {
        display: block;
    }

    & .${customControlInput}:valid:checked ~ .${customControlLabel}::before {
        background-color: #34ce57;
    }

    & .${customControlInput}:valid:focus ~ .${customControlLabel}::before {
        box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    & .${customFileInput}:valid ~ .${customFileLabel} {
        border-color: #28a745;
    }

    & .${customFileInput}:valid ~ .${customFileLabel}::before {
        border-color: inherit;
    }

    &
        .${customFileInput}:valid
        ~ .${validFeedback},
        &
        .${customFileInput}:valid
        ~ .${validTooltip} {
        display: block;
    }

    & .${customFileInput}:valid:focus ~ .${customFileLabel} {
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }

    & .${formControl}:invalid, & .${customSelect}:invalid {
        border-color: #dc3545;
    }

    & .${formControl}:invalid:focus, & .${customSelect}:invalid:focus {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    &
        .${formControl}:invalid
        ~ .${invalidFeedback},
        &
        .${formControl}:invalid
        ~ .${invalidTooltip},
        &
        .${customSelect}:invalid
        ~ .${invalidFeedback},
        &
        .${customSelect}:invalid
        ~ .${invalidTooltip} {
        display: block;
    }

    &
        .${formControlFile}:invalid
        ~ .${invalidFeedback},
        &
        .${formControlFile}:invalid
        ~ .${invalidTooltip} {
        display: block;
    }

    & .${formCheckInput}:invalid ~ .${formCheckLabel} {
        color: #dc3545;
    }

    &
        .${formCheckInput}:invalid
        ~ .${invalidFeedback},
        &
        .${formCheckInput}:invalid
        ~ .${invalidTooltip} {
        display: block;
    }

    & .${customControlInput}:invalid ~ .${customControlLabel} {
        color: #dc3545;
    }

    & .${customControlInput}:invalid ~ .${customControlLabel}::before {
        background-color: #efa2a9;
    }

    &
        .${customControlInput}:invalid
        ~ .${invalidFeedback},
        &
        .${customControlInput}:invalid
        ~ .${invalidTooltip} {
        display: block;
    }

    & .${customControlInput}:invalid:checked ~ .${customControlLabel}::before {
        background-color: #e4606d;
    }

    & .${customControlInput}:invalid:focus ~ .${customControlLabel}::before {
        box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }

    & .${customFileInput}:invalid ~ .${customFileLabel} {
        border-color: #dc3545;
    }

    & .${customFileInput}:invalid ~ .${customFileLabel}::before {
        border-color: inherit;
    }

    &
        .${customFileInput}:invalid
        ~ .${invalidFeedback},
        &
        .${customFileInput}:invalid
        ~ .${invalidTooltip} {
        display: block;
    }

    & .${customFileInput}:invalid:focus ~ .${customFileLabel} {
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
`;

