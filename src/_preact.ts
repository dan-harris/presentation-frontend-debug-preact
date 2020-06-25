import "preact/debug";
import { h, render } from 'preact';
import htm from 'htm';

// Initialize htm with Preact
const html = htm.bind(h);


export { render, html }